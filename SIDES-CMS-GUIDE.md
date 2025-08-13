# Side Projects CMS Guide

Your portfolio now has a complete CMS system for managing side projects.

## Local Development

To add side projects locally:

1. Create `.md` files in the `_sides/` directory
2. Use this frontmatter template:

```yaml
---
date: 2024-01-15
published: true
title: "Project Name"
description: "Brief project description for listing page"
categories: hardware, web, embedded
disciplines: "Web Development, Hardware"
time_period: "2024"
thumbnail: "/images/sides/project-name/thumbnail.jpg"

project_type: "Hardware + Software"
technologies: ["ESP32", "React", "Node.js"]
duration: "2 weeks"
status: "Completed"
github_url: "https://github.com/username/repo"
demo_url: "https://demo-url.com"

intro: |
  Brief introduction to the project that appears at the top of the project page.

content_layout:
  - section_layout: text
    content: |
      ## Section Title
      Markdown content here...
      
  - section_layout: 1col-narrow
    images:
      - caption: "Image description"
        description: "Alt text"
        url: '/sides/project-name/image.jpg'
---

Additional markdown content goes here and appears at the bottom of the project page.
```

## Online CMS Access

Once deployed to Netlify:

1. **Access the CMS**: Visit `yoursite.com/admin/` 
2. **Login**: Use Netlify Identity (set up in Netlify dashboard)
3. **Add Projects**: Click "New Side Projects" to create projects with a visual editor
4. **Manage Content**: Edit, delete, and organize projects through the web interface

## CMS Setup (One-time setup on Netlify)

1. **Deploy to Netlify**: Push your code and deploy
2. **Enable Identity**: In Netlify dashboard → Settings → Identity → Enable Identity
3. **Enable Git Gateway**: Identity → Services → Git Gateway → Enable
4. **Registration**: Set to "Invite only" for security
5. **Invite Users**: Identity → Invite users (use your email)

## CMS Features

- **Rich Text Editor**: Write content with markdown preview
- **Image Upload**: Drag & drop image uploads to `/images/sides/`
- **Content Layout Builder**: Add text sections and image galleries
- **Metadata Management**: Categories, technologies, status tracking
- **Draft Mode**: Save drafts before publishing
- **Responsive Interface**: Works on desktop and mobile

## Image Guidelines

- Store project images in `/images/sides/project-name/`
- Thumbnails should be 600x450px for grid consistency  
- Use descriptive filenames
- Supported: JPG, PNG, SVG

## Project Structure

```
portfolio/
├── _sides/                    # Side project markdown files
├── admin/                     # CMS interface files
├── images/sides/             # Project images
└── _pages/sides.html         # Listing page
```

Your sides page now uses the same design language as your main projects page with proper margins, spacing, and responsive layout.