/**
 * Shared config and submit logic for La Neta Google Form
 * "Registro de Nuevo Lead para Oportunidades La Neta"
 */

export const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeOqbnaMraRdjwbMoH2ParLe31bB0P8DQ-b9jIrxfYCXj6ihw/formResponse";

export const GOOGLE_FORM_ENTRIES = {
  fullName: "2080306168",
  email: "286963997",
  phone: "324457307",
  mainAccountUrl: "922261225",
  subject: "2133272371",
  message: "263860134",
} as const;

const GOOGLE_FORM_HIDDEN = {
  fbzx: "9198830995043414643",
  pageHistory: "0",
  fvv: "1",
  partialResponse: '[null,null,"9198830995043414643"]',
};

export interface GoogleFormPayload {
  fullName: string;
  email: string;
  phone: string;
  mainAccountUrl: string;
  subject: string;
  message: string;
}

const IFRAME_ID = "laneta-google-form-iframe";

/**
 * Submits form data to the La Neta Google Form via a hidden iframe.
 * Keeps the user on the current page and does not navigate away.
 */
export function submitToGoogleForm(data: GoogleFormPayload): void {
  if (typeof document === "undefined") return;

  let iframe = document.getElementById(IFRAME_ID) as HTMLIFrameElement | null;
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = IFRAME_ID;
    iframe.name = IFRAME_ID;
    iframe.setAttribute(
      "style",
      "position:absolute;width:0;height:0;border:none;visibility:hidden;"
    );
    document.body.appendChild(iframe);
  }

  const form = document.createElement("form");
  form.action = GOOGLE_FORM_ACTION;
  form.method = "POST";
  form.target = IFRAME_ID;
  form.style.display = "none";

  const entries: [string, string][] = [
    [GOOGLE_FORM_ENTRIES.fullName, data.fullName],
    [GOOGLE_FORM_ENTRIES.email, data.email],
    [GOOGLE_FORM_ENTRIES.phone, data.phone],
    [GOOGLE_FORM_ENTRIES.mainAccountUrl, data.mainAccountUrl],
    [GOOGLE_FORM_ENTRIES.subject, data.subject],
    [GOOGLE_FORM_ENTRIES.message, data.message],
  ];

  entries.forEach(([entryId, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = `entry.${entryId}`;
    input.value = value;
    form.appendChild(input);
  });

  Object.entries(GOOGLE_FORM_HIDDEN).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
