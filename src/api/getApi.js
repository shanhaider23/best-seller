var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { showNotification } from '@/utils/notification';
export const getApi = (url) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const options = {
        method: 'GET',
        url,
        headers: {
            'X-CSRFToken': document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/, '$1'), // Extract CSRF token from cookies
            pragma: 'no-cache',
            'cache-control': 'no-cache',
        },
    };
    try {
        const response = yield axios.request(options);
        return response;
    }
    catch (error) {
        const status = ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) || 0;
        const errorMessage = `
      <strong>${((_b = error.response) === null || _b === void 0 ? void 0 : _b.statusText) || 'Error'} - <i>${status}!</i></strong>
      ${((_d = (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.errors) || ''}
      <br /><br />If this problem persists, please contact support at info@example.com.
    `;
        showNotification(errorMessage, 'error');
        return null;
    }
});
