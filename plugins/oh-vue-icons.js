import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
    FaFlag,
    FaUser,
    MdShoppingcart,
    HiSearch,
    MdKeyboarddoublearrowleftTwotone,
    ViFileTypeIonic,
    MdArrowdropupTwotone,
    GiArchiveResearch,
    IoStar,
    FaRegularStar,

} from "oh-vue-icons/icons";

addIcons(FaFlag,
    FaUser,
    MdShoppingcart,
    HiSearch,
    MdKeyboarddoublearrowleftTwotone,
    ViFileTypeIonic,
    MdArrowdropupTwotone,
    GiArchiveResearch,
    IoStar,
    FaRegularStar,
);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("v-icon", OhVueIcon);
});