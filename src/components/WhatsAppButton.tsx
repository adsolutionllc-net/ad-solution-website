// Replace with your actual WhatsApp Business number, digits only,
// including country code, no +, spaces, or dashes.
// Example: US number +1 214 555 0142 -> "12145550142"
const WHATSAPP_NUMBER = '19735768963';
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about AD Solution Recruiting & Staffing.";

export function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 ring-1 ring-inset ring-white/20 transition-transform hover:scale-105 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.34.653 4.527 1.786 6.393L4 29l7.803-1.744A11.93 11.93 0 0 0 16.001 27C22.629 27 28 21.627 28 15S22.629 3 16.001 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.354l-.355-.21-4.63 1.035 1.061-4.52-.232-.37A9.73 9.73 0 0 1 5.25 15c0-5.936 4.815-10.75 10.751-10.75S26.75 9.064 26.75 15 21.937 24.75 16.001 24.75Zm5.34-7.36c-.293-.147-1.734-.856-2.003-.954-.269-.098-.465-.147-.66.147-.196.293-.758.954-.929 1.15-.171.196-.343.22-.636.073-.293-.147-1.236-.456-2.354-1.455-.87-.776-1.457-1.734-1.628-2.027-.171-.293-.018-.451.129-.598.132-.132.293-.343.44-.514.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.591-.905-2.179-.238-.573-.48-.495-.66-.504l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.028 1.004-1.028 2.449 0 1.445 1.052 2.841 1.198 3.037.147.196 2.07 3.16 5.017 4.431.701.303 1.248.484 1.675.62.704.224 1.344.192 1.85.117.564-.084 1.734-.709 1.978-1.394.245-.685.245-1.272.171-1.394-.073-.122-.269-.196-.562-.343Z" />
      </svg>
    </a>
  );
}