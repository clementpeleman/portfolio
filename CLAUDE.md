# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Setup and Installation
```bash
# Install Ruby dependencies
bundle install

# Install Jekyll and bundler gems
gem install jekyll bundler
```

### Local Development
```bash
# Start local development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

The site runs at http://localhost:4000/ in local development.

## Architecture Overview

This is a Jekyll-based static portfolio website for embedded product designer Clement Peleman. The site showcases projects and typography work ("Sides").

### Key Directory Structure
- `_projects/` - Portfolio project markdown files with YAML frontmatter
- `_fonts/` - Typography work collection ("Sides")  
- `_layouts/` - Jekyll templates (default, project, sides, etc.)
- `_includes/` - Reusable template components
- `_sass/` - SCSS stylesheets organized by base/components/layouts
- `_pages/` - Static pages (about, contact, projects listing)
- `images/` - Static assets organized by project folders

### Content Architecture

#### Project Structure
Projects are defined in `_projects/*.md` files with this frontmatter pattern:
```yaml
---
title: "Project Name"
description: "Brief description"
disciplines: "Web Development, Design"
time_period: "2024 – present"
thumbnail: "/projects/folder/thumbnail.jpg"
intro: |
  Markdown introduction text
content_layout:
  - section_layout: 1col-narrow
    images:
      - caption: "Image description"
        url: '/projects/folder/image.png'
---
```

#### Dynamic Layout System
The `content_layout` array drives project page content using `_includes/layout.html`:
- `section_layout` options: text, 1col-narrow, etc.
- Images are automatically processed with captions and descriptions
- Text sections render markdown content

### Collections Configuration
- `projects` collection outputs to `/projects/:path/`
- `fonts` collection outputs to `/sides/:path/` 
- Default layouts assigned via `_config.yml` defaults

### Styling Architecture
SCSS is organized in `_sass/` with clear separation:
- `site/base/` - Variables, mixins, typography, utilities
- `site/components/` - Header, navigation, footer components
- `site/layouts/` - Page-specific styling

### Content Management
- Projects are portfolio pieces with rich media layouts
- "Sides" are typography/font projects 
- Navigation defined in `_config.yml`
- Site metadata and social links configured centrally

### Deployment
- Deployed via Netlify
- Uses `_redirects` file for URL redirects
- Compressed HTML output enabled
- Optimized for PageSpeed Insights performance