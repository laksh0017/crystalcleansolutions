export const SITE = {
  name: "CRYSTAL",
  tagline: "Procurement. Simplified.",
  phoneRaw: "919391937991",
  phone: "+91 93919 37991",
  email: "hello@crystalprocure.com",
  gstin: "36DGXPM2881K1ZG",
  address:
    "37, Sitaram Nagar Colony, Diamond Point Rd, Sikh Village, Secunderabad, Telangana 500009",
  city: "Hyderabad",
};

export const WHATSAPP = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
  "Hi CRYSTAL, I'd like to discuss procurement for our business.",
)}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.address,
)}`;
