# Sankalp Special School Website

A comprehensive website for Sankalp Special School in Kanpur, providing information about programs, services, and facilitating admissions and contact.

## Features

- 🏫 **Complete School Website** with all essential pages
- 📝 **Contact Forms** with backend integration
- 🎓 **Admission System** with inquiry forms
- ⭐ **Review System** with rating functionality
- 📅 **Event Registration** system
- 📧 **Newsletter Subscription** management
- 🗺️ **Google Maps Integration** for location
- 📱 **Fully Responsive** design
- ♿ **Accessibility Features** built-in
- 🔒 **Form Validation** and security

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS, shadcn/ui components
- **Backend:** Next.js API Routes
- **Data Storage:** JSON files (easily upgradeable to database)
- **Maps:** Google Maps embed
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   \`\`\`bash
   git clone <repository-url>
   cd sankalp-special-school
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
sankalp-special-school/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── admissions/        # Admissions page
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form API
│   │   ├── reviews/       # Reviews API
│   │   ├── admissions/    # Admissions API
│   │   ├── events/        # Events API
│   │   └── newsletter/    # Newsletter API
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   ├── gallery/           # Gallery page
│   ├── programs/          # Programs page
│   ├── resources/         # Resources page
│   ├── reviews/           # Reviews page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── forms/             # Form components
│   ├── ui/                # shadcn/ui components
│   ├── footer.tsx         # Footer component
│   ├── header.tsx         # Header component
│   └── leaflet-map.tsx    # Map component
├── data/                  # JSON data storage
│   ├── contacts.json      # Contact submissions
│   ├── reviews.json       # Reviews data
│   ├── admissions.json    # Admission inquiries
│   ├── event-registrations.json
│   └── newsletter.json    # Newsletter subscriptions
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   ├── api-client.ts      # API client
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
└── public/                # Static assets
\`\`\`

## API Endpoints

### Contact API
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

### Reviews API
- `POST /api/reviews` - Submit a review
- `GET /api/reviews` - Get approved reviews

### Admissions API
- `POST /api/admissions` - Submit admission inquiry
- `GET /api/admissions` - Get admission inquiries

### Events API
- `POST /api/events/register` - Register for event
- `GET /api/events/register` - Get event registrations

### Newsletter API
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Get newsletter subscriptions

## Data Storage

Currently using JSON files for data storage. Files are automatically created in the `data/` directory:

- `contacts.json` - Contact form submissions
- `reviews.json` - User reviews and ratings
- `admissions.json` - Admission inquiries
- `event-registrations.json` - Event registrations
- `newsletter.json` - Newsletter subscriptions

## Customization

### Updating School Information

1. **Contact Details:** Update in `app/contact/page.tsx` and `components/footer.tsx`
2. **School Address:** Update in contact page and map component
3. **Phone/Email:** Update throughout the application
4. **Programs:** Modify `app/programs/page.tsx`
5. **About Information:** Update `app/about/page.tsx`

### Styling

- **Colors:** Modify `app/globals.css` CSS variables
- **Components:** Update `tailwind.config.js` for theme changes
- **Layout:** Modify individual page components

### Adding New Features

1. **New API Endpoint:** Add to `app/api/` directory
2. **New Page:** Add to `app/` directory
3. **New Component:** Add to `components/` directory
4. **New Types:** Add to `lib/types.ts`

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

### Other Platforms

- **Netlify:** Build command: `npm run build`, Publish directory: `.next`
- **Railway:** Supports Next.js out of the box
- **DigitalOcean App Platform:** Node.js application

## Environment Variables

For production, you may want to add:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=info@sankalpspecialschool.com
\`\`\`

## Security Features

- ✅ Input sanitization
- ✅ XSS protection
- ✅ Form validation (client & server)
- ✅ Rate limiting ready
- ✅ CSRF protection ready

## Performance

- ✅ Next.js optimizations
- ✅ Image optimization
- ✅ Code splitting
- ✅ Static generation where possible
- ✅ Responsive images

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Color contrast compliance

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support or questions:
- Email: info@sankalpspecialschool.com
- Phone: +91 XXXXX XXXXX

## License

This project is licensed under the MIT License.
