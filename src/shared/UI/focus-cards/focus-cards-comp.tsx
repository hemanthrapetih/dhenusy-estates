import { FocusCards } from "./focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Camping is for pros",
      src: "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5a2f82cc1ad2bb7183b2_3456.jpg",
    },
    {
      title: "The road not taken",
      src: "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664b5b5653ae4ac0fa3065dc_31948.jpg",
    },
    {
      title: "The First Rule",
      src: "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664726649f49f35a2ad4239a_Construction-Documents_Pedernal.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664726649f49f35a2ad42390_co-create_bg-image-p-1600.jpg",
    },
    {
      title: "Forest Adventure",
      src: "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664878e63d13be8382b9b391_Green%20Villa%20For%20Websitemobile-p-2000.jpg",
    },
    {
      title: "Valley of life",
      src: "https://cdn.prod.website-files.com/664726639f49f35a2ad42291/664726649f49f35a2ad42388_conchal.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}
