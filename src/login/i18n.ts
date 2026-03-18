import { i18nBuilder } from "@keycloakify/login-ui/i18n";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { I18nProvider, useI18n } = i18nBuilder
    .withThemeName<ThemeName>()
    .withCustomTranslations({
        en: {
            welcomeMessage:
                "Welcome to Acme inc - Your gateway to seamless planning and organization.",
            loginAccountTitle: "Login to your account",
            registerTitle: "Register a new account",
            noAccount: "Don't have an account?",
            doRegister: "Sign up",
            "organization.selectTitle": "Choose Your Organization",
            "organization.pickPlaceholder": "Pick an organization to continue",
            "identity-provider-login-last-used": "Last used"
        },
        ar: {
            welcomeMessage: "مرحبًا بك في Acme inc - بوابتك إلى التخطيط والتنظيم السلس.",
            loginAccountTitle: "تسجيل الدخول إلى حسابك",
            registerTitle: "تسجيل حساب جديد",
            doRegister: "إنشاء حساب",
            noAccount: "ليس لديك حساب؟",
            "organization.selectTitle": "اختر مؤسستك",
            "organization.pickPlaceholder": "اختر مؤسسة للمتابعة",
            "identity-provider-login-last-used": "آخر استخدام"
        },
        ca: {
            welcomeMessage:
                "Benvingut a Acme inc: la vostra porta d'accés a una planificació i organització perfecta.",
            loginAccountTitle: "Inicieu sessió al vostre compte",
            registerTitle: "Registrar un nou compte",
            noAccount: "No tens un compte?",
            doRegister: "Registra't",
            "organization.selectTitle": "Trieu la vostra organització",
            "organization.pickPlaceholder": "Trieu una organització per continuar",
            "identity-provider-login-last-used": "Últim ús"
        },
        cs: {
            welcomeMessage:
                "Vítejte v Acme inc – vaší bráně k bezproblémovému plánování a organizaci.",
            loginAccountTitle: "Přihlaste se ke svému účtu",
            registerTitle: "Zaregistrovat nový účet",
            noAccount: "Nemáte účet?",
            doRegister: "Zaregistrovat se",
            "organization.selectTitle": "Vyberte svou organizaci",
            "organization.pickPlaceholder": "Pokračujte výběrem organizace",
            "identity-provider-login-last-used": "Naposledy použito"
        },
        da: {
            welcomeMessage:
                "Velkommen til Acme inc - din gateway til problemfri planlægning og organisering.",
            loginAccountTitle: "Log ind på din konto",
            registerTitle: "Registrer en ny konto",
            noAccount: "Har du ikke en konto?",
            doRegister: "Tilmeld dig",
            "organization.selectTitle": "Vælg din organisation",
            "organization.pickPlaceholder": "Vælg en organisation for at fortsætte",
            "identity-provider-login-last-used": "Sidst brugt"
        },
        de: {
            welcomeMessage:
                "Willkommen bei Acme inc – Ihr Zugang zu nahtloser Planung und Organisation.",
            loginAccountTitle: "In Ihrem Konto anmelden",
            registerTitle: "Neues Konto registrieren",
            noAccount: "Haben Sie noch kein Konto?",
            doRegister: "Registrieren",
            "organization.selectTitle": "Wählen Sie Ihre Organisation",
            "organization.pickPlaceholder":
                "Wählen Sie eine Organisation aus, um fortzufahren",
            "identity-provider-login-last-used": "Zuletzt verwendet"
        },
        el: {
            welcomeMessage:
                "Καλώς ήρθατε στην Acme inc - Η πύλη σας για απρόσκοπτο σχεδιασμό και οργάνωση.",
            loginAccountTitle: "Σύνδεση στον λογαριασμό σας",
            registerTitle: "Εγγραφή νέου λογαριασμού",
            noAccount: "Δεν έχετε λογαριασμό;",
            doRegister: "Εγγραφείτε",
            "organization.selectTitle": "Επιλέξτε τον οργανισμό σας",
            "organization.pickPlaceholder": "Επιλέξτε έναν οργανισμό για να συνεχίσετε",
            "identity-provider-login-last-used": "Χρησιμοποιήθηκε τελευταία"
        },
        es: {
            welcomeMessage:
                "Bienvenido a Acme inc: su puerta de entrada a una planificación y organización perfectas.",
            loginAccountTitle: "Inicie sesión en su cuenta",
            registerTitle: "Registrar una cuenta nueva",
            noAccount: "¿No tienes una cuenta?",
            doRegister: "Registrarse",
            "organization.selectTitle": "Elija su organización",
            "organization.pickPlaceholder": "Elija una organización para continuar",
            "identity-provider-login-last-used": "Último uso"
        },
        fa: {
            welcomeMessage:
                "به Acme inc خوش آمدید - دروازه شما برای برنامه‌ریزی و سازماندهی بدون نقص.",
            loginAccountTitle: "وارد حساب کاربری خود شوید",
            registerTitle: "ثبت نام حساب جدید",
            noAccount: "حساب کاربری ندارید؟",
            doRegister: "ثبت نام",
            "organization.selectTitle": "سازمان خود را انتخاب کنید",
            "organization.pickPlaceholder": "برای ادامه یک سازمان را انتخاب کنید",
            "identity-provider-login-last-used": "آخرین استفاده"
        },
        fi: {
            welcomeMessage:
                "Tervetuloa Acme inc:iin – porttisi saumattomaan suunnitteluun ja organisointiin.",
            loginAccountTitle: "Kirjaudu tilillesi",
            registerTitle: "Rekisteröi uusi tili",
            noAccount: "Puuttuuko tili?",
            doRegister: "Rekisteröidy",
            "organization.selectTitle": "Valitse organisaatiosi",
            "organization.pickPlaceholder": "Valitse organisaatio jatkaaksesi",
            "identity-provider-login-last-used": "Viimeksi käytetty"
        },
        fr: {
            welcomeMessage:
                "Bienvenue sur Acme inc - Votre passerelle vers une planification et une organisation sans faille.",
            loginAccountTitle: "Connectez-vous à votre compte",
            registerTitle: "Créer un nouveau compte",
            doRegister: "S'inscrire",
            noAccount: "Vous n'avez pas de compte?",
            "organization.selectTitle": "Choisissez Votre Organisation",
            "organization.pickPlaceholder":
                "Sélectionnez une organisation pour continuer",
            "identity-provider-login-last-used": "Dernière utilisation"
        },
        hu: {
            welcomeMessage:
                "Üdvözöljük az Acme inc-nél – Az Ön kapuja a zökkenőmentes tervezéshez és szervezéshez.",
            loginAccountTitle: "Jelentkezzen be fiókjába",
            registerTitle: "Új fiók regisztrálása",
            noAccount: "Nincs még fiókja?",
            doRegister: "Regisztráció",
            "organization.selectTitle": "Válassza ki a szervezetét",
            "organization.pickPlaceholder": "A folytatáshoz válasszon egy szervezetet",
            "identity-provider-login-last-used": "Utoljára használt"
        },
        it: {
            welcomeMessage:
                "Benvenuti in Acme inc - Il vostro portale per una pianificazione e un'organizzazione senza interruzioni.",
            loginAccountTitle: "Accedi al tuo account",
            registerTitle: "Registra un nuovo account",
            noAccount: "Non hai un account?",
            doRegister: "Iscriviti",
            "organization.selectTitle": "Scegli la tua organizzazione",
            "organization.pickPlaceholder": "Scegli un'organizzazione per continuare",
            "identity-provider-login-last-used": "Ultimo utilizzo"
        },
        ja: {
            welcomeMessage:
                "Acme inc へようこそ - シームレスな計画と組織化へのゲートウェイ。",
            loginAccountTitle: "アカウントにログイン",
            registerTitle: "新規アカウント登録",
            noAccount: "アカウントをお持ちでないですか？",
            doRegister: "新規登録",
            "organization.selectTitle": "組織を選択してください",
            "organization.pickPlaceholder": "続行するには組織を選択してください",
            "identity-provider-login-last-used": "最終使用日"
        },
        ka: {
            welcomeMessage:
                "მოგესალმებით Acme inc-ში - თქვენი კარიბჭე უწყვეტი დაგეგმვისა და ორგანიზებისთვის.",
            loginAccountTitle: "შედით თქვენს ანგარიშში",
            registerTitle: "ახალი ანგარიშის რეგისტრაცია",
            noAccount: "არ გაქვთ ანგარიში?",
            doRegister: "რეგისტრაცია",
            "organization.selectTitle": "აირჩიეთ თქვენი ორგანიზაცია",
            "organization.pickPlaceholder": "გასაგრძელებლად აირჩიეთ ორგანიზაცია",
            "identity-provider-login-last-used": "ბოლოს გამოყენებული"
        },
        lt: {
            welcomeMessage:
                "Sveiki atvykę į „Acme inc“ – jūsų vartai į sklandų planavimą ir organizavimą.",
            loginAccountTitle: "Prisijunkite prie savo paskyros",
            registerTitle: "Registruoti naują paskyrą",
            noAccount: "Neturite paskyros?",
            doRegister: "Registruotis",
            "organization.selectTitle": "Pasirinkite savo organizaciją",
            "organization.pickPlaceholder": "Norėdami tęsti, pasirinkite organizaciją",
            "identity-provider-login-last-used": "Paskutinį kartą naudota"
        },
        lv: {
            welcomeMessage:
                "Laipni lūdzam Acme inc — jūsu vārti uz nevainojamu plānošanu un organizēšanu.",
            loginAccountTitle: "Pieteikties savā kontā",
            registerTitle: "Reģistrēt jaunu kontu",
            noAccount: "Nav konta?",
            doRegister: "Reģistrēties",
            "organization.selectTitle": "Izvēlieties savu organizāciju",
            "organization.pickPlaceholder": "Izvēlieties organizāciju, lai turpinātu",
            "identity-provider-login-last-used": "Pēdējo reizi izmantots"
        },
        nl: {
            welcomeMessage:
                "Welkom bij Acme inc - Uw toegangspoort tot naadloze planning en organisatie.",
            loginAccountTitle: "Inloggen op uw account",
            registerTitle: "Registreer een nieuw account",
            noAccount: "Heeft u nog geen account?",
            doRegister: "Aanmelden",
            "organization.selectTitle": "Kies uw organisatie",
            "organization.pickPlaceholder": "Kies een organisatie om verder te gaan",
            "identity-provider-login-last-used": "Laatst gebruikt"
        },
        no: {
            welcomeMessage:
                "Velkommen til Acme inc - din inngangsport til sømløs planlegging og organisering.",
            loginAccountTitle: "Logg inn på kontoen din",
            registerTitle: "Registrer en ny konto",
            noAccount: "Har du ikke konto?",
            doRegister: "Registrer deg",
            "organization.selectTitle": "Velg din organisasjon",
            "organization.pickPlaceholder": "Velg en organisasjon for å fortsette",
            "identity-provider-login-last-used": "Sist brukt"
        },
        pl: {
            welcomeMessage:
                "Witamy w Acme inc — Twojej bramie do bezproblemowego planowania i organizacji.",
            loginAccountTitle: "Zaloguj się do swojego konta",
            registerTitle: "Zarejestruj nowe konto",
            noAccount: "Nie masz konta?",
            doRegister: "Zarejestruj się",
            "organization.selectTitle": "Wybierz swoją organizację",
            "organization.pickPlaceholder": "Wybierz organizację, aby kontynuować",
            "identity-provider-login-last-used": "Ostatnio używane"
        },
        pt: {
            welcomeMessage:
                "Bem-vindo à Acme inc - Sua porta de entrada para planejamento e organização integrados.",
            loginAccountTitle: "Faça login na sua conta",
            registerTitle: "Registar uma nova conta",
            noAccount: "Não tem uma conta?",
            doRegister: "Registe-se",
            "organization.selectTitle": "Escolha a sua organização",
            "organization.pickPlaceholder": "Escolha uma organização para continuar",
            "identity-provider-login-last-used": "Última utilização"
        },
        "pt-BR": {
            welcomeMessage:
                "Bem-vindo à Acme inc - Seu portal para planejamento e organização contínuos.",
            loginAccountTitle: "Entre na sua conta",
            registerTitle: "Cadastrar uma nova conta",
            noAccount: "Não tem uma conta?",
            doRegister: "Cadastre-se",
            "organization.selectTitle": "Escolha sua organização",
            "organization.pickPlaceholder": "Escolha uma organização para continuar",
            "identity-provider-login-last-used": "Último uso"
        },
        ru: {
            welcomeMessage:
                "Добро пожаловать в Acme inc — ваш путь к эффективному планированию и организации.",
            loginAccountTitle: "Войти в свой аккаунт",
            registerTitle: "Регистрация нового аккаунта",
            noAccount: "Нет аккаунта?",
            doRegister: "Зарегистрироваться",
            "organization.selectTitle": "Выберите вашу организацию",
            "organization.pickPlaceholder": "Выберите организацию, чтобы продолжить",
            "identity-provider-login-last-used": "Последнее использование"
        },
        sk: {
            welcomeMessage:
                "Vitajte v Acme inc – vašej bráne k bezproblémovému plánovaniu a organizácii.",
            loginAccountTitle: "Prihláste sa do svojho účtu",
            registerTitle: "Zaregistrovať nový účet",
            noAccount: "Nemáte účet?",
            doRegister: "Zaregistrovať sa",
            "organization.selectTitle": "Vyberte svoju organizáciu",
            "organization.pickPlaceholder": "Pokračujte výberom organizácie",
            "identity-provider-login-last-used": "Naposledy použité"
        },
        sv: {
            welcomeMessage:
                "Välkommen till Acme inc - din inkörsport till sömlös planering och organisering.",
            loginAccountTitle: "Logga in på ditt konto",
            registerTitle: "Registrera ett nytt konto",
            noAccount: "Har du inget konto?",
            doRegister: "Registrera dig",
            "organization.selectTitle": "Välj din organisation",
            "organization.pickPlaceholder": "Välj en organisation för att fortsätta",
            "identity-provider-login-last-used": "Senast använd"
        },
        th: {
            welcomeMessage:
                "ยินดีต้อนรับสู่ Acme inc - ประตูสู่การวางแผนและจัดระเบียบที่ราบรื่น",
            loginAccountTitle: "เข้าสู่ระบบบัญชีของคุณ",
            registerTitle: "ลงทะเบียนบัญชีใหม่",
            noAccount: "ยังไม่มีบัญชีใช่ไหม?",
            doRegister: "สมัครสมาชิก",
            "organization.selectTitle": "เลือกองค์กรของคุณ",
            "organization.pickPlaceholder": "เลือกองค์กรเพื่อดำเนินการต่อ",
            "identity-provider-login-last-used": "ใช้งานล่าสุด"
        },
        tr: {
            welcomeMessage:
                "Acme inc'e hoş geldiniz - Kusursuz planlama ve organizasyona giden kapınız.",
            loginAccountTitle: "Hesabınıza giriş yapın",
            registerTitle: "Yeni bir hesap oluşturun",
            noAccount: "Hesabınız yok mu?",
            doRegister: "Kaydol",
            "organization.selectTitle": "Organizasyonunuzu Seçin",
            "organization.pickPlaceholder": "Devam etmek için bir organizasyon seçin",
            "identity-provider-login-last-used": "Son kullanılan"
        },
        uk: {
            welcomeMessage:
                "Ласкаво просимо до Acme inc — вашого шлюзу до безперебійного планування та організації.",
            loginAccountTitle: "Увійдіть у свій акаунт",
            registerTitle: "Зареєструвати новий акаунт",
            noAccount: "Немає акаунта?",
            doRegister: "Зареєструватися",
            "organization.selectTitle": "Виберіть свою організацію",
            "organization.pickPlaceholder": "Виберіть організацію, щоб продовжити",
            "identity-provider-login-last-used": "Останнє використання"
        },
        "zh-CN": {
            welcomeMessage: "欢迎来到 Acme inc - 开启无缝规划与组织的门户。",
            loginAccountTitle: "登录您的账号",
            registerTitle: "注册新账号",
            noAccount: "还没有账号？",
            doRegister: "立即注册",
            "organization.selectTitle": "选择您的组织",
            "organization.pickPlaceholder": "请选择一个组织以继续",
            "identity-provider-login-last-used": "最近使用"
        },
        "zh-TW": {
            welcomeMessage: "歡迎來到 Acme inc - 開啟無縫規劃與組織的門戶。",
            loginAccountTitle: "登入您的帳號",
            registerTitle: "註冊新帳號",
            noAccount: "還沒有帳號？",
            doRegister: "立即註冊",
            "organization.selectTitle": "選擇您的組織",
            "organization.pickPlaceholder": "請選擇一個組織以繼續",
            "identity-provider-login-last-used": "最近使用"
        }
    })
    .build();

export { I18nProvider, useI18n };
