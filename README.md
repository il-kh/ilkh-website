# ILKH Website

## Website Content Management Guide

This guide explains how to update and manage projects on our website using the visual content editor (Decap CMS). You don't need any technical knowledge to use this — just follow the steps below.

---

### What You Can Do

- Add new projects
- Update existing project info or images
- Organize projects into categories
- Choose which projects are featured on the **Showcase** page

---

### How to Log In

1. Go to the admin panel:
   `https://yourdomain.com/admin/`

2. Log in with your credentials (ask [admin name] if you don’t have access yet)

---

### Managing Projects

Once logged in:

1. Click on the **Projects** collection.
2. You'll see a list of all current projects.
3. To edit a project:
   - Click its name.
   - Update the title, description, or images.
   - Click **Publish** (or **Save** as draft if not ready).
4. To add a new project:
   - Click **New Project**
   - Fill out the form (see below for details)
   - Click **Publish**

---

### Project Fields Explained

| Field               | What to Do                                                                 |
|---------------------|----------------------------------------------------------------------------|
| **Title**           | Name of the project                                                        |
| **Category**        | Choose from dropdown (e.g. Surveys, Geotechnical Engineering, etc.)        |
| **Main Image**      | Upload the main image (used for the thumbnail and project page)            |
| **Gallery Images**  | Upload as many additional images as you want (for the project page)        |
| **Showcase Project?** | Turn this ON if you want this project to appear on the special Showcase page |
| **Description**     | Add project details (text, links, etc.)                                    |

---

### 🖼 Image Tips

- Upload **high-quality JPEG images**.
- You don’t need to resize or crop — the system will handle it for you.
- For best results:
  - Use images around **1600 × 1200 pixels** (max).
  - File size under **500 KB** is ideal.
- When updating an image, simply upload the new one and remove the old.

---

### Categories

Each project must belong to a **category**. This helps us display projects by type.

Examples:
- **Surveys**
- **Geotechnical Engineering**
- **Environmental Studies**

Let us know if a category is missing — we can add it for you.

---

### 🖥 Updating the Showcase Page

To feature a project on the homepage or showcase section:

1. Open the project.
2. Scroll to the **"Showcase Project?"** switch.
3. Turn it ON.
4. Click **Publish**.

The selected project's thumbnail will appear automatically on the showcase page.

## Development

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
