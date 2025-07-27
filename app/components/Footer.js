import ContactUs from "./ContactUs";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <ContactUs />
      <div className="text-center py-6 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BitLinks. All rights reserved.
      </div>
    </footer>
  );
}
