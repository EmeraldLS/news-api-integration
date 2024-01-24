"use strict";
//Get your api key at https://mediastack.com/ first
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getNews = ({ apiKey, countries }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`http://api.mediastack.com/v1/news?access_key=${apiKey}&countries=${countries}`);
        const jsonResp = (yield response.json());
        const data = jsonResp.data;
        console.log(data);
    }
    catch (error) {
        const err = error;
        console.log(err);
    }
});
// Countries is string separated by commas
getNews({ apiKey: "custom api key here", countries: "ni" });
