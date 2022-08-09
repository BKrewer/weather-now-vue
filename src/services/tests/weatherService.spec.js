import axios from "axios";

jest.mock("axios");

import { requestWeather, formatData } from "../weatherService";
import { dataMock, dataFormattedMock } from "./mocks/weatherServiceMock";

describe('weatherService', () => {
    it('request successfully data from an API', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(dataMock));

        await expect(requestWeather('3421319')).resolves.toEqual(dataMock);
    });
    it('request with error from an API', async () => {
        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );

        await expect(requestWeather('3421319')).rejects.toThrow(errorMessage);
    });
    it('FormatData format correctly', () => {
        expect(formatData(dataMock)).toEqual(dataFormattedMock);
    });
})


