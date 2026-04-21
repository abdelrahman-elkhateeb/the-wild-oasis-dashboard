أبشر، هعملك ملف **README.md** احترافي يليق بمشروع ضخم زي **The Wild Oasis**. الملف ده مصمم عشان يوضح لأي "Recruiter" أو "Senior Developer" إنك مش بس ناقل كود، لكنك فاهم بنية التطبيقات المعقدة.

انسخ الكود اللي بالأسفل وحطه في ملف `README.md` عندك:

---

```markdown
# 🌲 The Wild Oasis - Internal Management System

A professional, feature-rich internal management application for a boutique hotel. This project was built to master high-level React patterns and professional application development workflows.

🏠 **Live Demo:** [The Wild Oasis]([https://the-wild-oasis.vercel.app/dashboar](https://the-wild-oasis-dashboard-peach.vercel.app/login)d)

---

## 🚀 Key Features

* **Full Dashboard:** Visualize hotel statistics (bookings, sales, check-ins) through interactive charts (Recharts).
* **Booking Management:** Complete CRUD operations for hotel bookings with filtering, sorting, and pagination.
* **Cabin Management:** Manage cabin details, prices, discounts, and images.
* **Guest Authentication:** Secure login and user profile updates (avatar, password) via Supabase.
* **Dark Mode:** A seamless dark/light mode toggle with state persistence.
* **Dynamic Settings:** Global hotel settings (breakfast price, min/max stay) managed through the UI.
* **Check-in/Check-out:** Streamlined workflow for guest arrivals, including optional breakfast add-ons.

---

## 🛠️ Tech Stack & Advanced Concepts

### Core Technologies
* **React:** Functional components with Hooks.
* **React Query (TanStack Query):** For powerful remote state management, caching, and data fetching.
* **Supabase:** Backend-as-a-Service (BaaS) providing PostgreSQL database and Authentication.
* **Styled Components:** For component-level CSS and advanced theme management.
* **React Hook Form:** Efficient form handling and validation.

### Advanced Architectural Patterns
* **Compound Component Pattern:** Used for building flexible and reusable UI components (e.g., Tables, Menus, Modals).
* **Custom Hooks:** Encapsulating logic for authentication, data fetching, and UI interactions.
* **HOCs & Render Props:** Implementing advanced React patterns for code reusability.
* **Professional Planning:** Application developed following a strict architecture (Services, Features, UI, Hooks).

---

## 📂 Project Structure

```text
src/
 ├── data/           # Remote data logic (Supabase)
 ├── features/       # Feature-based folders (Bookings, Cabins, Auth, etc.)
 ├── hooks/          # Reusable custom hooks
 ├── pages/          # Main route components
 ├── services/       # API interaction layer
 ├── ui/             # Reusable UI components (Design System)
 └── utils/          # Helper functions & constants
```

---

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdelrahman-elkhateeb/the-wild-oasis-dashboard.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Setup:**
   Create a `.env` file and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_KEY=your_supabase_anon_key
   ```
4. **Run the app:**
   ```bash
   npm run dev
   ```
---
⭐ *This project was built as part of the "Ultimate React Course" by Jonas Schmedtmann.*
```


إيه رأيك؟ لو حابب أضيف أي تفاصيل تانية أنا معاك.
