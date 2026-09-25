import { test, expect } from "@playwright/test";

test('Get booking details by Id- path param', async ({ request }) => {

    const bookingId = 3352; // we can this as path parameter

    //sending get request along with path parameter
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);

    //parse the response and print
    const responseBody = await response.json();
    console.log(responseBody);

    //add assertions
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

})
