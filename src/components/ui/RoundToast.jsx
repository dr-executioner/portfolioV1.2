export default function RoundToast({ showToast, toastMessage, error }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-50 w-11/12 sm:w-8/12 max-w-xl">
      <div
        className={`
            p-1.5 bg-white text-primary-bg rounded-sm md:rounded-full 
            shadow-2xl backdrop-blur-sm transition-all duration-500 ease-out
            flex items-center justify-center
            ${
              showToast
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-20 opacity-0 scale-95"
            }
          `}
      >
        {error.status && !toastMessage.length ? (
          <svg
            className="w-12 h-12"
            fill="red"
            stroke="red"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="green"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <span className="font-medium text-sm md:text-base">{toastMessage}</span>
      </div>
    </div>
  );
}
