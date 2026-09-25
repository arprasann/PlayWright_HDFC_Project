/*
Test: create booking
Request type: Post
Request body: static

Add url to playwright.config.ts file
	baseURL: 'https://restful-booker.herokuapp.com'
 
 
*/

import { test, expect } from "@playwright/test"

test("Create Post request using static body", async({ request }) => {

    //request body
    const requestBody = {
        firstname: "Jim1",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        bookingdates: {
            checkin: "2026-09-24",
            checkout: "2026-09-25",
        },
        additionalneeds: "super bowls",
    }

    // send post request

    const response=await request.post("https://restful-booker.herokuapp.com/booking",{data:requestBody});

    const responseBody=await response.json();  // Extractred response
    console.log(responseBody);
    
    //validate status
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    //validate response body attributes
    expect(responseBody).toHaveProperty("bookingid")
    expect(responseBody).toHaveProperty("booking")
    expect(responseBody).toHaveProperty("booking.additionalneeds")

    //validate booking details
    const booking=responseBody.booking;


    expect(booking).toMatchObject({
        firstname: "Jim1",
        lastname: "Brown",
        totalprice: 1000,
        depositpaid: true,
        additionalneeds: "super bowls",
    });

    //validate booking dates (nested json object)
    expect(booking.bookingdates).toMatchObject({
            checkin: "2026-09-24",
            checkout: "2026-09-25",
        });

})


