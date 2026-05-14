export const SITE = {
  name: "Crystal Clean Solutions",
  shortName: "Crystal",
  tagline: "Workplace Hygiene Procurement — Simplified.",
  phoneRaw: "919391937991",
  phone: "+91 93919 37991",
  email: "crystalcleansolutions.hyd@gmail.com",
  gstin: "36DGXPM2881K1ZG",
  address:
    "37, Sitaram Nagar Colony, Diamond Point Rd, Sikh Village, Secunderabad, Telangana 500009",
  city: "Hyderabad",
  clusters: [
    "Hitech City", "Gachibowli", "Madhapur", "Financial District",
    "Banjara Hills", "Jubilee Hills", "Manikonda", "Secunderabad",
  ],
};

export const WHATSAPP = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(
  "Hi Crystal Clean Solutions, I'd like a quotation for our workplace hygiene procurement.",
)}`;

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.address,
)}`;
