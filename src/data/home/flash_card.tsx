import { User, emptyUser } from "../common/user";
import Type from "./type";

interface FlashCard {
  type: Type;
  id: number;
  playlist: string;
  description: string;
  flashcard_front: string;
  flashcard_back: string;
  user: User;
}

const emptyFlashCard: FlashCard = { description: "Topic 5.2: Manifest Destiny #apush", flashcard_back: "The idea that the United States was to possess the entire continent from the Atlantic Ocean to the Pacific Ocean and that this right was given to them by God. John O'Sullivan was the first to coin this term describing westward expansion.", flashcard_front: "Manifest Destiny is the idea that the U.S. had", id: 3047, playlist: "Period 5: 1844-1877", type: Type.FLASHCARD, user: { avatar: "https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png", name: "AP US History" } }

export { type FlashCard, emptyFlashCard };

