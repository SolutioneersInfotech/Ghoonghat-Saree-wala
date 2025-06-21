
export default function WhatsAppChat() {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 z-50">
      <a
        href="https://wa.me/917844970993" // Replace with your phone number in international format
        target="_blank"
        rel="noopener noreferrer"
      >
      <button className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M20.52 3.48A12.072 12.072 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.55 4.112 1.587 5.886L0 24l6.222-1.624A11.97 11.97 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.25-6.205-3.48-8.52zM12 22.077c-1.77 0-3.493-.468-5.012-1.353l-.36-.206-3.692.964.985-3.599-.234-.37C2.344 15.29 1.846 13.678 1.846 12 1.846 6.884 6.884 1.846 12 1.846c3.027 0 5.863 1.177 8 3.314s3.314 4.973 3.314 8c0 5.116-5.038 10.154-10.154 10.154zm5.5-7.499l-2.322-.663a.882.882 0 00-.902.225l-.703.72a9.804 9.804 0 01-4.743-4.743l.72-.703a.882.882 0 00.225-.902l-.663-2.322a.882.882 0 00-1.38-.455l-1.35 1.35a1.087 1.087 0 00-.316.772c0 6.171 5.015 11.186 11.186 11.186a1.087 1.087 0 00.772-.316l1.35-1.35a.882.882 0 00-.455-1.38z" />
          </svg>
      </button>
      </a>
    </div>
  )
}
