# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: APIProjectTests\post_api_requestTC01_CreateBooking.spec.ts >> Create Post request using static body
- Location: tests\APIProjectTests\post_api_requestTC01_CreateBooking.spec.ts:14:5

# Error details

```
Error: expect(received).toMatchObject(expected)

- Expected  - 2
+ Received  + 2

  Object {
-   "checkin": "2026-07-01",
-   "checkout": "2026-07-05",
+   "checkin": "2026-09-24",
+   "checkout": "2026-09-25",
  }
```

# Test source

```ts
  1  | /*
  2  | Test: create booking
  3  | Request type: Post
  4  | Request body: static
  5  | 
  6  | Add url to playwright.config.ts file
  7  | 	baseURL: 'https://restful-booker.herokuapp.com'
  8  |  
  9  |  
  10 | */
  11 | 
  12 | import { test, expect } from "@playwright/test"
  13 | 
  14 | test("Create Post request using static body", async({ request }) => {
  15 | 
  16 |     //request body
  17 |     const requestBody = {
  18 |         firstname: "Jim1",
  19 |         lastname: "Brown",
  20 |         totalprice: 1000,
  21 |         depositpaid: true,
  22 |         bookingdates: {
  23 |             checkin: "2026-09-24",
  24 |             checkout: "2026-09-25",
  25 |         },
  26 |         additionalneeds: "super bowls",
  27 |     }
  28 | 
  29 |     // send post request
  30 | 
  31 |     const response=await request.post("https://restful-booker.herokuapp.com/booking",{data:requestBody});
  32 | 
  33 |     const responseBody=await response.json();  // Extractred response
  34 |     console.log(responseBody);
  35 |     
  36 |     //validate status
  37 |     expect(response.ok()).toBeTruthy();
  38 |     expect(response.status()).toBe(200);
  39 | 
  40 |     //validate response body attributes
  41 |     expect(responseBody).toHaveProperty("bookingid")
  42 |     expect(responseBody).toHaveProperty("booking")
  43 |     expect(responseBody).toHaveProperty("booking.additionalneeds")
  44 | 
  45 |     //validate booking details
  46 |     const booking=responseBody.booking;
  47 | 
  48 | 
  49 |     expect(booking).toMatchObject({
  50 |         firstname: "Jim1",
  51 |         lastname: "Brown",
  52 |         totalprice: 1000,
  53 |         depositpaid: true,
  54 |         additionalneeds: "super bowls",
  55 |     });
  56 | 
  57 |     //validate booking dates (nested json object)
> 58 |     expect(booking.bookingdates).toMatchObject({
     |                                  ^ Error: expect(received).toMatchObject(expected)
  59 |             checkin: "2026-07-01",
  60 |             checkout: "2026-07-05",
  61 |         });
  62 | 
  63 | })
  64 | 
```