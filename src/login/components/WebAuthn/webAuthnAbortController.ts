/**
 * Singleton abort controller for WebAuthn operations.
 * Ensures only one WebAuthn request is active at a time by aborting previous requests.
 *
 * Based on the original Keycloak implementation:
 * https://github.com/keycloak/keycloak/blob/main/themes/src/main/resources/theme/base/login/resources/js/webauthnAuthenticate.js
 */

let abortController: AbortController | undefined = undefined;

/**
 * Get an abort signal for the current WebAuthn operation.
 * Automatically aborts any previous pending WebAuthn request.
 *
 * @returns AbortSignal for use with navigator.credentials.get()
 */
export function getWebAuthnSignal(): AbortSignal {
    if (abortController) {
        // Abort the previous call
        const abortError = new Error("Cancelling pending WebAuthn call");
        abortError.name = "AbortError";
        abortController.abort(abortError);
    }

    abortController = new AbortController();
    return abortController.signal;
}
