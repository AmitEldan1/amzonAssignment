## Cart Functionality – Test Coverage & Future Improvements

As part of Section 3 in this automation project, I implemented 3 core test cases for the shopping cart functionality. These scenarios included key validations such as:

- **Free shipping restriction:** Prevent checkout when subtotal is below threshold.
- **Free shipping eligibility:** Enable free shipping once minimum total is reached.
- **Cart persistence:** Ensure cart contents persist after page refresh.

To further expand test coverage, I identified several additional edge cases that could be automated:

- **Image accuracy:** Verify product image in cart matches product detail page.
- **Produc navigation:** Navigate correctly when clicking a product in the cart.
- **Quantity controls:** Add and remove items directly from the cart.
- **UI buttons:** Validate functionality of "Compare," "Share," and "Save for Later."
- **Out-of-stock handling:** Block actions on products that are out of stock.
- **Partial availability:** Handle unavailable color or size variations.
- **Stress testing:** Add/remove 100+ items to observe system behavior.
- **Performance:** Measure cart page load time under various conditions.
- **Cross-browser/device compatibility:** Ensure consistent cart experience across browsers and devices.
- **Guest vs. logged-in users:** Compare cart behavior and persistence between anonymous and signed-in users.

## Additional Notes and Considerations

- Due to lack of public access to Amazon’s APIs, tests rely solely on UI validation. Ideally, I would separate UI from logic by using API calls for backend validation and setup (cart state, product availability, product stock).

- With access to the codebase, I’d work with developers to add stable test selectors (data-cy) to improve test reliability and reduce flakiness.
