# Screen Reader Testing Results

**Date:** [YYYY-MM-DD]  
**Screen Reader Used:** [VoiceOver (macOS) / NVDA (Windows) / JAWS / Other]  
**Browser:** [Safari / Chrome / Firefox / Edge / Other]  
**Tester:** [Your Name or “Self”]

---

## 1. Navigation

| Test Step | Expected Behavior | Actual Result | Pass/Fail | Notes/Fixes Needed |
|-----------|------------------|---------------|-----------|--------------------|
| Tab through navigation | Each link is announced with its label; navigation region is announced |  |  |  |
| “Skip to main content” link | Link is announced first, works and moves focus to main content |  |  |  |

---

## 2. Section Headings

| Section | Expected Heading | Actual Announcement | Pass/Fail | Notes/Fixes Needed |
|---------|-----------------|--------------------|-----------|--------------------|
| Hero    | h1: Name        |                    |           |                    |
| Skills  | h2: Core Competencies, h3: Skill Categories | |   |                    |
| Portfolio | h2: My Recent Projects, h3: Project Titles | |   |                    |
| Blog    | h2: Latest Insights, h3: Blog Titles |           |                    |
| Contact | h2: Get in Touch |                    |           |                    |

---

## 3. Interactive Elements

| Element | Expected Announcement/Behavior | Actual Result | Pass/Fail | Notes/Fixes Needed |
|---------|-------------------------------|--------------|-----------|--------------------|
| Filter buttons | Announced as buttons, state (pressed) is read |  |  |  |
| “View More” buttons | Announced as buttons, clear label |  |  |  |
| Project/Blog links | Announced as links, descriptive |  |  |  |

---

## 4. Forms

| Field/Button | Expected | Actual | Pass/Fail | Notes/Fixes Needed |
|--------------|----------|--------|-----------|--------------------|
| Name input   | Label is read, field is focusable |  |  |  |
| Email input  | Label is read, field is focusable |  |  |  |
| Message textarea | Label is read, field is focusable |  |  |  |
| Submit button | Announced as “Send Message” |  |  |  |
| Success/Error message | Announced automatically |  |  |  |
| Newsletter input | Label is read (even if visually hidden) |  |  |  |

---

## 5. Images and Icons

| Image/Icon | Expected | Actual | Pass/Fail | Notes/Fixes Needed |
|------------|----------|--------|-----------|--------------------|
| Project images | Descriptive alt text is read |  |  |  |
| Decorative images | Not announced or announced as decorative |  |  |  |
| Social/media icons | Announced with label |  |  |  |

---

## 6. Focus Management

| Test Step | Expected | Actual | Pass/Fail | Notes/Fixes Needed |
|-----------|----------|--------|-----------|--------------------|
| Tab order | Logical, matches visual order |  |  |  |
| Focus indicators | Visible on all interactive elements |  |  |  |
| No keyboard traps | Can always tab out of elements |  |  |  |

---

## 7. Announcements/Live Regions

| Test Step | Expected | Actual | Pass/Fail | Notes/Fixes Needed |
|-----------|----------|--------|-----------|--------------------|
| Form success/error | Announced automatically |  |  |  |

---

## 8. General Observations

- [ ] All content is accessible and understandable with a screen reader.
- [ ] No information is conveyed by color alone.
- [ ] No unexpected screen reader behavior.

---

## Summary

| Area | Pass/Fail | Issues Found | Recommended Fixes |
|------|-----------|-------------|-------------------|
|      |           |             |                   |

---

**Example Entry:**

| Test Step | Expected | Actual | Pass/Fail | Notes/Fixes Needed |
|-----------|----------|--------|-----------|--------------------|
| Tab through navigation | Each link is announced with its label | All links announced, but “Blog” link missing label | Fail | Add aria-label to Blog link | 