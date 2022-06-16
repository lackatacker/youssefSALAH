<template>

  <div class="d-flex p-2 justify-content-center">

    <div class="CheckoutPaymentForm">
      <div class="PaymentRequestOrHeader" style="display: inherit; height: auto;">
        <div class="PaymentHeaderContainer" style="display: block; opacity: 1;">
          <div class="PaymentHeader">
            <div class="Text Text-color--default Text-fontSize--20 Text-fontWeight--500">
              Pay with card</div>
          </div>
        </div>
        <div class="ButtonAndDividerContainer" style="opacity: 0; display: none;">
        </div>
      </div>
      <div class="flex-container direction-column" style="">
        <form novalidate="">
          <div style="height: 470.875px;">
            <div>
              <div style="opacity: 1;">
                <div class="App-Global-Fields flex-container spacing-16 direction-row wrap-wrap">
                  <div class="flex-item width-12">
                    <div class="FormFieldGroup" data-qa="FormFieldGroup-email">
                      <div class="FormFieldGroup-labelContainer flex-container justify-content-space-between">
                        <label for="email">
                          <span class="Text Text-color--gray600 Text-fontSize--13 Text-fontWeight--500">
                            Email</span>
                        </label>
                        <div style="opacity: 1; transform: none;">
                        </div>
                      </div>
                      <div class="FormFieldGroup-Fieldset" id="email-fieldset">
                        <div class="FormFieldGroup-container">
                          <div
                            class="FormFieldGroup-child FormFieldGroup-child--width-12 FormFieldGroup-childLeft FormFieldGroup-childRight FormFieldGroup-childTop FormFieldGroup-childBottom">
                            <div class="FormFieldInput">
                              <div class="CheckoutInputContainer">
                                <span class="InputContainer" data-max="">
                                  <input class="CheckoutInput Input Input--empty" autocomplete="email" autocorrect="off"
                                    spellcheck="false" id="email" name="email" type="text" inputmode="email"
                                    autocapitalize="none"   value="">
                                </span>
                              </div>
                            </div>
                          </div>
                          <div class="FieldError-container" style="opacity: 0; height: 0px;">
                            <span class="FieldError Text Text-color--red Text-fontSize--13">
                              <span >
                              </span>
                            </span>
                          </div>
                        </div>
                        <div class="FieldError-container" style="opacity: 0; height: 0px;">
                          <span class="FieldError Text Text-color--red Text-fontSize--13">
                            <span >
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="opacity: 1;">
                  <div class="PaymentForm-paymentMethodForm flex-container spacing-16 direction-column wrap-wrap">
                    <div class="flex-item width-12">
                      <div class="FormFieldGroup">
                        <div class="FormFieldGroup-labelContainer flex-container justify-content-space-between">
                          <label for="cardNumber-fieldset">
                            <span class="Text Text-color--gray600 Text-fontSize--13 Text-fontWeight--500">
                              Card information</span>
                          </label>
                        </div>
                        <fieldset class="FormFieldGroup-Fieldset" id="cardNumber-fieldset">
                          <div class="FormFieldGroup-container" id="cardNumber-fieldset">
                            <div
                              class="FormFieldGroup-child FormFieldGroup-child--width-12 FormFieldGroup-childLeft FormFieldGroup-childRight FormFieldGroup-childTop">
                              <div class="FormFieldInput">
                                <div class="CheckoutInputContainer">
                                  <span class="InputContainer" data-max="">
                                    <input class="CheckoutInput CheckoutInput--tabularnums Input Input--empty"
                                      autocomplete="cc-number" autocorrect="off" spellcheck="false" id="cardNumber"
                                      name="cardNumber" type="text" inputmode="numeric" aria-label="Card number"
                                      placeholder="1234 1234 1234 1234"  value="">
                                  </span>
                                </div>
                                <div class="FormFieldInput-Icons" style="opacity: 1;">
                                  <div style="transform: none;">
                                    <span class="FormFieldInput-IconsIcon is-visible">
                                      <img
                                        src="https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg"
                                        alt="Visa" class="BrandIcon">
                                    </span>
                                  </div>
                                  <div style="transform: none;">
                                    <span class="FormFieldInput-IconsIcon is-visible">
                                      <img
                                        src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg"
                                        alt="MasterCard" class="BrandIcon">
                                    </span>
                                  </div>
                                  <div style="transform: none;">
                                    <span class="FormFieldInput-IconsIcon is-visible">
                                      <img
                                        src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg"
                                        alt="American Express" class="BrandIcon">
                                    </span>
                                  </div>
                                  <div class="CardFormFieldGroupIconOverflow">
                                    <span
                                      class="CardFormFieldGroupIconOverflow-Item CardFormFieldGroupIconOverflow-Item--visible"
                                      role="presentation">
                                      <span class="FormFieldInput-IconsIcon" role="presentation">
                                        <img
                                          src="https://js.stripe.com/v3/fingerprinted/img/unionpay-8a10aefc7295216c338ba4e1224627a1.svg"
                                          alt="UnionPay" class="BrandIcon">
                                      </span>
                                    </span>
                                    <span
                                      class="CardFormFieldGroupIconOverflow-Item CardFormFieldGroupIconOverflow-Item--invisible"
                                      role="presentation">
                                      <span class="FormFieldInput-IconsIcon" role="presentation">
                                        <img
                                          src="https://js.stripe.com/v3/fingerprinted/img/jcb-271fd06e6e7a2c52692ffa91a95fb64f.svg"
                                          alt="JCB" class="BrandIcon">
                                      </span>
                                    </span>
                                    <span
                                      class="CardFormFieldGroupIconOverflow-Item CardFormFieldGroupIconOverflow-Item--invisible"
                                      role="presentation">
                                      <span class="FormFieldInput-IconsIcon" role="presentation">
                                        <img
                                          src="https://js.stripe.com/v3/fingerprinted/img/discover-ac52cd46f89fa40a29a0bfb954e33173.svg"
                                          alt="Discover" class="BrandIcon">
                                      </span>
                                    </span>
                                    <span
                                      class="CardFormFieldGroupIconOverflow-Item CardFormFieldGroupIconOverflow-Item--invisible"
                                      role="presentation">
                                      <span class="FormFieldInput-IconsIcon" role="presentation">
                                        <img
                                          src="https://js.stripe.com/v3/fingerprinted/img/diners-fbcbd3360f8e3f629cdaa80e93abdb8b.svg"
                                          alt="Diners Club" class="BrandIcon">
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              class="FormFieldGroup-child FormFieldGroup-child--width-6 FormFieldGroup-childLeft FormFieldGroup-childBottom">
                              <div class="FormFieldInput">
                                <div class="CheckoutInputContainer">
                                  <span class="InputContainer" data-max="">
                                    <input class="CheckoutInput CheckoutInput--tabularnums Input Input--empty"
                                      autocomplete="cc-exp" autocorrect="off" spellcheck="false" id="cardExpiry"
                                      name="cardExpiry" type="text" inputmode="numeric" aria-label="Expiration"
                                      placeholder="MM / YY"  value="">
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              class="FormFieldGroup-child FormFieldGroup-child--width-6 FormFieldGroup-childRight FormFieldGroup-childBottom">
                              <div class="FormFieldInput has-icon">
                                <div class="CheckoutInputContainer">
                                  <span class="InputContainer" data-max="">
                                    <input class="CheckoutInput CheckoutInput--tabularnums Input Input--empty"
                                      autocomplete="cc-csc" autocorrect="off" spellcheck="false" id="cardCvc"
                                      name="cardCvc" type="text" inputmode="numeric" aria-label="CVC" placeholder="CVC"
                                       value="">
                                  </span>
                                </div>
                                <div class="FormFieldInput-Icon is-loaded">
                                  <svg class="Icon Icon--md" focusable="false" viewBox="0 0 32 21" role="img"
                                    aria-label="CVC">
                                    <title>
                                      CVC</title>
                                    <g fill="none" fill-rule="evenodd">
                                      <g class="Icon-fill">
                                        <g transform="translate(0 2)">
                                          <path
                                            d="M21.68 0H2c-.92 0-2 1.06-2 2v15c0 .94 1.08 2 2 2h25c.92 0 2-1.06 2-2V9.47a5.98 5.98 0 0 1-3 1.45V11c0 .66-.36 1-1 1H3c-.64 0-1-.34-1-1v-1c0-.66.36-1 1-1h17.53a5.98 5.98 0 0 1 1.15-9z"
                                            opacity=".2">
                                          </path>
                                          <path d="M19.34 3H0v3h19.08a6.04 6.04 0 0 1 .26-3z" opacity=".3">
                                          </path>
                                        </g>
                                        <g transform="translate(18)">
                                          <path
                                            d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14zM4.22 4.1h-.79l-1.93.98v1l1.53-.8V9.9h1.2V4.1zm2.3.8c.57 0 .97.32.97.78 0 .5-.47.85-1.15.85h-.3v.85h.36c.72 0 1.21.36 1.21.88 0 .5-.48.84-1.16.84-.5 0-1-.16-1.52-.47v1c.56.24 1.12.37 1.67.37 1.31 0 2.21-.67 2.21-1.64 0-.68-.42-1.23-1.12-1.45.6-.2.99-.73.99-1.33C8.68 4.64 7.85 4 6.65 4a4 4 0 0 0-1.57.34v.98c.48-.27.97-.42 1.44-.42zm4.32 2.18c.73 0 1.24.43 1.24.99 0 .59-.51 1-1.24 1-.44 0-.9-.14-1.37-.43v1.03c.49.22.99.33 1.48.33.26 0 .5-.04.73-.1.52-.85.82-1.83.82-2.88l-.02-.42a2.3 2.3 0 0 0-1.23-.32c-.18 0-.37.01-.57.04v-1.3h1.44a5.62 5.62 0 0 0-.46-.92H9.64v3.15c.4-.1.8-.17 1.2-.17z">
                                          </path>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div style="opacity: 0; height: 0px;">
                              <span class="FieldError Text Text-color--red Text-fontSize--13">
                                <span >
                                </span>
                              </span>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div>
                      </div>
                    </div>
                    <div class="InstallmentPlanOptionsForm InstallmentPlanOptionsForm-hidden flex-item width-12">
                      <div style="display: none; height: 0px; opacity: 0; pointer-events: none;">
                        <div class="CheckboxField">
                          <div class="Checkbox-InputContainer">
                            <input id="InstallmentPlanSelector-checkbox" name="InstallmentPlanSelector-checkbox"
                              type="checkbox" class="Checkbox-Input">
                            <span class="Checkbox-StyledInput">
                            </span>
                          </div>
                          <label for="InstallmentPlanSelector-checkbox">
                            <span
                              class="Checkbox-Label Text Text-color--gray600 Text-fontSize--13 Text-fontWeight--500">
                              <div class="Text Text-color--default Text-fontSize--13">
                                Pay in installments</div>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="BillingAddressForm-addressInput flex-item width-12" aria-hidden="false">
                      <div style="pointer-events: auto; display: block; height: auto; opacity: 1;">
                        <div class="flex-container spacing-16 direction-column wrap-wrap">
                          <div class="flex-item width-12">
                            <div class="FormFieldGroup">
                              <div class="FormFieldGroup-labelContainer flex-container justify-content-space-between">
                                <label for="billingName">
                                  <span class="Text Text-color--gray600 Text-fontSize--13 Text-fontWeight--500">
                                    Name on card</span>
                                </label>
                              </div>
                              <div class="FormFieldGroup-Fieldset" id="billingName-fieldset">
                                <div class="FormFieldGroup-container" id="billingName-fieldset">
                                  <div
                                    class="FormFieldGroup-child FormFieldGroup-child--width-12 FormFieldGroup-childLeft FormFieldGroup-childRight FormFieldGroup-childTop FormFieldGroup-childBottom">
                                    <div class="FormFieldInput">
                                      <div class="CheckoutInputContainer">
                                        <span class="InputContainer" data-max="">
                                          <input class="CheckoutInput Input Input--empty" autocomplete="ccname"
                                            autocorrect="off" spellcheck="false" id="billingName" name="billingName"
                                            type="text"  value="">
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div style="opacity: 0; height: 0px;">
                                    <span class="FieldError Text Text-color--red Text-fontSize--13">
                                      <span >
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="flex-item width-12">
                            <div class="FormFieldGroup">
                              <div class="FormFieldGroup-labelContainer flex-container justify-content-space-between">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="PaymentForm-confirmPaymentContainer flex-item width-grow">
            <div class="flex-item width-12">
            </div>
            <div class="flex-item width-12">
              <button class="SubmitButton SubmitButton--incomplete" type="submit"
                data-testid="hosted-payment-submit-button"
                style="background-color: rgb(0, 116, 212); color: rgb(255, 255, 255);">
                <div class="SubmitButton-Shimmer"
                  style="background: linear-gradient(to right, rgba(0, 116, 212, 0) 0%, rgb(58, 139, 238) 50%, rgba(0, 116, 212, 0) 100%);">
                </div>
                <div class="SubmitButton-TextContainer">
                  <span
                    class="SubmitButton-Text SubmitButton-Text--current Text Text-color--default Text-fontWeight--500">
                    Pay</span>
                  <span
                    class="SubmitButton-Text SubmitButton-Text--pre Text Text-color--default Text-fontWeight--500"
                    >
                    Processing...</span>
                </div>
                <div class="SubmitButton-IconContainer">
                  <div class="SubmitButton-Icon SubmitButton-Icon--pre">
                    <div class="Icon Icon--md Icon--square">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false">
                        <path
                          d="M3 7V5a5 5 0 1 1 10 0v2h.5a1 1 0 0 1 1 1v6a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1zm5 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zM11 7V5a3 3 0 1 0-6 0v2z"
                          fill="#ffffff" fill-rule="evenodd">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div class="SubmitButton-Icon SubmitButton-SpinnerIcon SubmitButton-Icon--pre">
                    <div class="Icon Icon--md Icon--square">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
                        <ellipse cx="12" cy="12" rx="10" ry="10" style="stroke: rgb(255, 255, 255);">
                        </ellipse>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="SubmitButton-CheckmarkIcon">
                  <div class="Icon Icon--md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" focusable="false">
                      <path d="M 0.5 6 L 8 13.5 L 21.5 0" fill="transparent" stroke-width="2" stroke="#ffffff"
                        stroke-linecap="round" stroke-linejoin="round">
                      </path>
                    </svg>
                  </div>
                </div>
              </button>
              <div class="ConfirmPayment-PostSubmit">
                <div>
                  <div class="flex-container spacing-8 direction-column" style="margin-top: 4px;">
                    <div class="flex-item width-grow">
                    </div>
                    <div class="flex-item width-grow">
                      <div class="ConfirmTerms Text Text-color--gray600 Text-fontSize--13"
                        data-testid="ConfirmPaymentTermsText">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>

</template>


<script>


export default {
  data(){
    return {

  }
  },
  components: {
  },
  computed:{

  },
  methods: {

  },
  created() {
  }
}
</script>

<style>

@import "https://js.stripe.com/v3/fingerprinted/css/checkout-app-init-3c13d94e8f943022ba1928ae1ded7070.css"
</style>
