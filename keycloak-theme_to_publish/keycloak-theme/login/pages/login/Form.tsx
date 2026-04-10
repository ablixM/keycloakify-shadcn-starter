import { Button } from '../../../components/ui/button';
import { Checkbox } from '../../../components/ui/checkbox';
import { Field, FieldError, FieldLabel } from '../../../components/ui/field';
import { Input } from '../../../components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../../../components/ui/input-group';
import { Alert, AlertDescription } from '../../../components/ui/alert';
import { Label } from '../../../components/ui/label';
import { WebAuthnConditionalUI } from '@/login/components/WebAuthnConditionalUi';
import { Fingerprint } from "lucide-react";
import { useKcContext } from "@/login/KcContext";
import { kcSanitize } from "@keycloakify/login-ui/kcSanitize";
import { useKcClsx } from "@keycloakify/login-ui/useKcClsx";
import { useState } from "react";
import { assert } from "tsafe/assert";
import { PasswordVisibilityButton } from "../../components/PasswordVisibilityButton";
import { useI18n } from "../../i18n";

export function Form() {
    const { kcContext } = useKcContext();

    assert(kcContext.pageId === "login.ftl");

    const { msg, msgStr } = useI18n();

    const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

    const { kcClsx } = useKcClsx();

    const hasCredentialError = kcContext.messagesPerField.existsError(
        "username",
        "password",
    );

    const credentialErrorMessage = hasCredentialError
        ? kcContext.messagesPerField.getFirstError("username", "password")
        : undefined;

    const webAuthnButtonId = "authenticateWebAuthnButton";

    return (
        <>
            <div id="kc-form">
                <div id="kc-form-wrapper">
                    {kcContext.realm.password && (
                        <form
                            id="kc-form-login"
                            onSubmit={() => {
                                setIsLoginButtonDisabled(true);
                                return true;
                            }}
                            action={kcContext.url.loginAction}
                            method="post"
                            className="space-y-3"
                        >
                            {hasCredentialError && credentialErrorMessage && (
                                <Alert variant="error" className="my-3">
                                    <AlertDescription>
                                        <span
                                            id="credential-error"
                                            aria-live="polite"
                                            dangerouslySetInnerHTML={{
                                                __html: kcSanitize(credentialErrorMessage),
                                            }}
                                        />
                                    </AlertDescription>
                                </Alert>
                            )}
                            {!kcContext.usernameHidden && (
                                <Field>
                                    <FieldLabel htmlFor="username">
                                        {!kcContext.realm.loginWithEmailAllowed
                                            ? msg("email")
                                            : !kcContext.realm.registrationEmailAsUsername
                                                ? msg("usernameOrEmail")
                                                : msg("username")}
                                    </FieldLabel>
                                    <Input
                                        tabIndex={2}
                                        type="text"
                                        id="username"
                                        className="h-12 rounded-md "
                                        defaultValue={kcContext.login.username ?? ""}
                                        name="username"
                                        autoFocus
                                        autoComplete={kcContext.enableWebAuthnConditionalUI ? "username webauthn" : "username"}
                                        aria-invalid={kcContext.messagesPerField.existsError(
                                            "username",
                                            "password"
                                        )}
                                    />
                                    {kcContext.messagesPerField.existsError(
                                        "username",
                                        "password"
                                    ) && (
                                            <FieldError>
                                                <span
                                                    id="input-error"
                                                    aria-live="polite"
                                                    dangerouslySetInnerHTML={{
                                                        __html: kcSanitize(
                                                            kcContext.messagesPerField.getFirstError(
                                                                "username",
                                                                "password"
                                                            )
                                                        )
                                                    }}
                                                />
                                            </FieldError>
                                        )}
                                </Field>
                            )}

                            <Field>
                                <FieldLabel htmlFor="password">
                                    {msg("password")}
                                </FieldLabel>
                                <InputGroup>
                                    <InputGroupInput
                                        className="h-12 rounded-md"
                                        tabIndex={3}
                                        type="password"
                                        id="password"
                                        name="password"
                                        autoComplete="current-password"
                                        aria-invalid={kcContext.messagesPerField.existsError(
                                            "username",
                                            "password"
                                        )}
                                    />
                                    <InputGroupAddon align="inline-end" >
                                        <PasswordVisibilityButton
                                            passwordInputId="password" tabIndex={4} />
                                    </InputGroupAddon>
                                </InputGroup>
                                {kcContext.messagesPerField.existsError(
                                    "username",
                                    "password"
                                ) && (
                                        <FieldError>
                                            <span
                                                id="input-error"
                                                aria-live="polite"
                                                dangerouslySetInnerHTML={{
                                                    __html: kcSanitize(
                                                        kcContext.messagesPerField.getFirstError(
                                                            "username",
                                                            "password"
                                                        )
                                                    )
                                                }}
                                            />
                                        </FieldError>
                                    )}
                            </Field>

                            <div className=" space-y-1 my-3 flex justify-between text-xs ">
                                {kcContext.realm.rememberMe &&
                                    !kcContext.usernameHidden && (
                                        <div className="flex items-center space-x-2 ">
                                            <Checkbox
                                                tabIndex={5}
                                                id="rememberMe"
                                                name="rememberMe"
                                                defaultChecked={
                                                    !!kcContext.login.rememberMe
                                                }
                                            />

                                            <Label
                                                htmlFor="rememberMe"
                                                className="text-sm font-medium cursor-pointer"
                                            >
                                                {msg("rememberMe")}
                                            </Label>
                                        </div>
                                    )}
                                <div className="link-style ">
                                    {kcContext.realm.resetPasswordAllowed && (
                                        <span className=" underline-offset-4 hover:underline">
                                            <a
                                                tabIndex={6}
                                                href={
                                                    kcContext.url.loginResetCredentialsUrl
                                                }
                                            >
                                                <Label className="text-sm font-medium cursor-pointer">
                                                    {msg("doForgotPassword")}
                                                </Label>
                                            </a>
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className={kcClsx("kcFormGroupClass")}>
                                <input
                                    type="hidden"
                                    id="id-hidden-input"
                                    name="credentialId"
                                    value={kcContext.auth.selectedCredential}
                                />

                                <div className="flex justify-center max-w-xs mx-auto">
                                    <Button
                                        disabled={isLoginButtonDisabled}
                                        className="w-full mx-auto h-12 rounded-md border-2"
                                        tabIndex={7}
                                        name="login"
                                        id="kc-login"
                                        type="submit"
                                        value={msgStr("doLogIn")}
                                    >
                                        {msgStr("doLogIn")}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {kcContext.enableWebAuthnConditionalUI && (
                <>
                    <WebAuthnConditionalUI />
                    <Button
                        id={webAuthnButtonId}
                        type="button"
                        className="w-full"
                        variant="outline"
                    >
                        <Fingerprint className="w-4 h-4" />
                        {msgStr("passkey-doAuthenticate")}
                    </Button>
                </>
            )}
        </>
    );
}
