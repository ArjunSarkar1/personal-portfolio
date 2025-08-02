import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

export function useProfileViews() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true)

  // Get total count
  const getProfileViews = async () => {
    try {
      const { data, error } = await supabase
        .from('profile_views')
        .select('total_views')
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        console.error('Error fetching profile views:', error)
        return
      }

      setCount(data?.total_views || 0)
    } catch (error) {
      console.error('Error fetching profile views:', error)
    } finally {
      setLoading(false)
    }
  }

  // Increment count for new visitor
  const incrementProfileViews = async () => {
    try {
      // Check if this session has already been counted
      const sessionId = sessionStorage.getItem('profileViewSessionId')
      if (sessionId) {
        return // Already counted this session
      }

      // Generate unique session ID
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      sessionStorage.setItem('profileViewSessionId', newSessionId)

      // Increment the count in Supabase
      const { data, error } = await supabase
        .rpc('increment_profile_views')

      if (error) {
        console.error('Error incrementing profile views:', error)
        return
      }

      // Update local state
      setCount(prevCount => prevCount + 1)
    } catch (error) {
      console.error('Error incrementing profile views:', error)
    }
  }

  useEffect(() => {
    getProfileViews()
  }, [])

  useEffect(() => {
    // Increment count for new visitor
    incrementProfileViews()
  }, [])

  return { count, loading }
} 