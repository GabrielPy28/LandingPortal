/**
 * Google Form "Creator Contact and Profile Information"
 * Used by ConnectOpportunitiesModal (?open=connect_new_opportunities)
 */

export const CONNECT_OPPORTUNITIES_FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdy1DVid0XGGMAzE0KTT0aV3UlNn7g68Mw4nbIOhdTlUtHTUw/formResponse";

export const CONNECT_OPPORTUNITIES_ENTRIES = {
  fullName: "1260987176",
  typeOfContact: "1267458957",
  contactDetail: "979524203",
  managerPhone: "779328179",
  mainPlatform: "1172606629",
  youtubeChannel: "945727573",
  instagramAccount: "47612729",
  tiktokAccount: "413766606",
  facebookPage: "1155237031",
  other: "1010210063",
  contentNiche: "233592289",
  exploreOptions: "541421652",
} as const;

export interface ConnectOpportunitiesPayload {
  fullName: string;
  typeOfContact: string;
  contactDetail: string;
  managerPhone: string;
  mainPlatform: string;
  youtubeChannel: string;
  instagramAccount: string;
  tiktokAccount: string;
  facebookPage: string;
  other: string;
  contentNiche: string;
  exploreOptions: string;
}

const IFRAME_ID = "laneta-connect-opportunities-iframe";

export function submitConnectOpportunitiesForm(data: ConnectOpportunitiesPayload): void {
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
  form.action = CONNECT_OPPORTUNITIES_FORM_ACTION;
  form.method = "POST";
  form.target = IFRAME_ID;
  form.style.display = "none";

  const entries: [string, string][] = [
    [CONNECT_OPPORTUNITIES_ENTRIES.fullName, data.fullName],
    [CONNECT_OPPORTUNITIES_ENTRIES.typeOfContact, data.typeOfContact],
    [CONNECT_OPPORTUNITIES_ENTRIES.contactDetail, data.contactDetail],
    [CONNECT_OPPORTUNITIES_ENTRIES.managerPhone, data.managerPhone],
    [CONNECT_OPPORTUNITIES_ENTRIES.mainPlatform, data.mainPlatform],
    [CONNECT_OPPORTUNITIES_ENTRIES.youtubeChannel, data.youtubeChannel],
    [CONNECT_OPPORTUNITIES_ENTRIES.instagramAccount, data.instagramAccount],
    [CONNECT_OPPORTUNITIES_ENTRIES.tiktokAccount, data.tiktokAccount],
    [CONNECT_OPPORTUNITIES_ENTRIES.facebookPage, data.facebookPage],
    [CONNECT_OPPORTUNITIES_ENTRIES.other, data.other],
    [CONNECT_OPPORTUNITIES_ENTRIES.contentNiche, data.contentNiche],
    [CONNECT_OPPORTUNITIES_ENTRIES.exploreOptions, data.exploreOptions],
  ];

  entries.forEach(([entryId, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = `entry.${entryId}`;
    input.value = value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
