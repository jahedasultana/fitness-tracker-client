import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="container px-4 pb-12 pt-[72px] mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Fitness Tracker</h3>
            <p className="text-gray-400">
              Your ultimate fitness companion. Track your workouts, set goals, and achieve your fitness dreams with us.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors">Workouts</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors">Nutrition Plans</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors">Community</Link></li>
              <li><Link to="#" className="text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>123 Fitness Street, Workout City, SP 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>support@fittrack.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-400">Subscribe to get the latest updates and news.</p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="w-full flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} FitTrack. All rights reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link to="#" className="text-gray-400 hover:text-primary text-sm">Privacy Policy</Link>
              <Link to="#" className="text-gray-400 hover:text-primary text-sm">Terms of Service</Link>
              <Link to="#" className="text-gray-400 hover:text-primary text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
