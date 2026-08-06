import type { CoachProfile, SectionIntro } from "@/types/content";

export const coachesPageIntro: SectionIntro = {
  eyebrow: "Наша команда",
  title: "Тренери в академії AVANGARD Jiu-Jitsu",
  description:
    "Тренер не просто навчає технік — він виховує характер, формує дисципліну й бачить у тобі більше, ніж ти бачиш у собі.",
};

export const coachesPageBackground = {
  src: "/media/coaches/coaches-page-background.webp",
  alt: "Тренування з джиу-джитсу на татамі в академії Avangard",
};

export const coachesIntro: SectionIntro = {
  eyebrow: "Тренерський склад",
  title: "Ваш розвиток супроводжують тренери з багаторічним досвідом",
  description: "",
};

export const coaches: CoachProfile[] = [
  {
    id: "olena-lisnichuk",
    name: "Олена Ліснічук",
    role: "Засновниця AVANGARD JIU JITSU",
    rank: "Чорний пояс",
    summary: "Тренер дитячих, підліткових і дорослих груп",
    supportingInfo: ["Тренер дитячих, підліткових і дорослих груп та ветеранів", "У джиу-джитсу з 2009 року"],
    experience: "У джиу-джитсу з 2009 року",
    coaching: "Тренер дитячих, підліткових, дорослих груп та ветеранів",
    achievements: [
      "Чемпіонка України з джиу-джитсу, греплінгу та панкратіону",
      "Призерка чемпіонатів Європи та світу United World Wrestling",
    ],
    biography: [
      "Джиу-джитсу стало справою всього мого життя. Спочатку — як спортсменки, потім — як тренерки і засновниці академії, яку я створила такою, у якій сама завжди хотіла б тренуватися.",
      "За роки роботи я виховала багатьох чемпіонів і призерів всеукраїнських та міжнародних змагань. Але найбільша цінність для мене — не медалі. Найважливіше, щоб діти виростали сильними, впевненими, дисциплінованими людьми, які поважають себе й інших, а дорослі знаходили тут місце, де не лише можна розвиватися, а й на кілька годин відволіктися від щоденних турбот.",
      "Для мене академія — це значно більше, ніж спортивний зал. Усі тренери працюють з індивідуальним підходом, аби розкрити кожну дитину, розвинути впевненість у собі, силу, але при цьому дати їй розуміння, що чим більша сила, тим більша відповідальність. Я прагну, щоб зал був місцем, куди хочеться приходити після важкого дня, де тебе зустрічає команда однодумців, спільнота, а часом — уже й близькі друзі. Місце, з якого не хочеться йти і в яке завжди хочеться повертатися.",
      "Саме таку академію ми будуємо щодня — разом із нашими спортсменами, батьками та тренерами.",
    ],
    socialLinks: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/olena.lisnichuk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
      {
        label: "TikTok",
        href: "https://www.tiktok.com/@olenka_jiu?is_from_webapp=1&sender_device=pc",
      },
    ],
    focusAreas: [],
    imageLabel: "",
    imageSrc: "/media/coaches/olena-lisnichuk-profile.webp",
    imageAlt: "Олена Ліснічук, тренерка Avangard Jiu-Jitsu",
    imageObjectPosition: "center 24%",
    profileImageSrc: "/media/coaches/olena-lisnichuk-profile.webp",
    profileImageAlt: "Олена Ліснічук у кімоно в залі Avangard Jiu-Jitsu",
    profileImageObjectPosition: "center 22%",
  },
  {
    id: "andrii-lisnichuk",
    name: "Андрій Ліснічук",
    role: "Співзасновник AVANGARD JIU JITSU",
    rank: "Коричневий пояс",
    summary: "Тренер дорослих та ветеранів",
    supportingInfo: ["Тренер дорослих та ветеранів", "У джиу-джитсу з 2012 року"],
    experience: "У джиу-джитсу з 2012 року",
    coaching: "Тренер дорослих та ветеранів",
    achievements: [
      "Майстер спорту України з панкратіону",
      "Чемпіон і призер всеукраїнських турнірів з джиу-джитсу, греплінгу та ADCC",
      "Переможець Кубка Міністра внутрішніх справ з панкратіону",
    ],
    militaryBackground: [
      "Ветеран російсько-української війни",
      "Учасник операції з оборони Донецького аеропорту, Пісків та Авдіївки",
      "Кавалер ордена «За мужність» III ступеня",
      "Командир полку Зведеної стрілецької бригади «Хижак»",
    ],
    biography: [
      "Недосяжність абсолютної досконалості в джиу-джитсу може бути прекрасною метафорою й для ілюстрації нашого життя.",
      "Бо як би швидко ми не бігли дітьми за веселкою, вона залишалася недосяжною, проте не ставала від цього менш захопливою та бажаною. Те саме відбувається з нами на татамі.",
      "Що б не трапилося протягом дня — невдоволення, фрустрація чи розчарування — кожен клас джиу-джитсу є можливістю на певний час забути про все й погнатися за нашою недосяжною, але такою захопливою метою.",
      "Тож знемагайте жагою до знань, бо досконалість ви пізнаєте лише в її пошуках.",
    ],
    socialLinks: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/nogar_18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
    focusAreas: [],
    imageLabel: "",
    imageSrc: "/media/coaches/andrii-lisnichuk-profile.webp",
    imageAlt: "Андрій Ліснічук, тренер Avangard Jiu-Jitsu",
    imageObjectPosition: "center 22%",
    profileImageSrc: "/media/coaches/andrii-lisnichuk-profile.webp",
    profileImageAlt: "Андрій Ліснічук у кімоно в залі Avangard Jiu-Jitsu",
    profileImageObjectPosition: "center 28%",
  },
  {
    id: "volodymyr-tkachuk",
    name: "Володимир Ткачук",
    role: "Тренер дитячих та підліткових груп",
    rank: "Пурпурний пояс",
    summary: "У джиу-джитсу з 2019 року",
    supportingInfo: ["У джиу-джитсу з 2019 року"],
    experience: "У джиу-джитсу з 2019 року",
    coaching: "Тренер дитячих та підліткових груп",
    achievements: [
      "Чемпіон і призер всеукраїнських турнірів та Чемпіонату України",
    ],
    biography: [
      "Для мене джиу-джитсу — це не просто спорт. Він навчив мене дисципліни та терпіння. Тут я знайшов близьких друзів, і загалом наш колектив для мене — як родина.",
      "Коли я почав тренувати дітей, побачив, як джиу-джитсу гармонійно розвиває тіло: зміцнює спину, покращує координацію й гнучкість, учить відчувати тіло та рухатися усвідомлено. А ще це про внутрішні зміни. Діти стають упевненішими, учаться долати труднощі, поважати суперника та підтримувати одне одного.",
      "Для мене найбільша нагорода — бачити, як сором’язлива дитина починає вірити в себе, а впевнена із задоволенням виходить на килим. Саме заради таких моментів я треную. Я хочу, щоб кожна дитина не просто навчилася техніки, а знайшла в цьому спорті впевненість, друзів та міцний фундамент на майбутнє.",
    ],
    socialLinks: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/tkachuk_v1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
    focusAreas: [],
    imageLabel: "",
    imageSrc: "/media/coaches/volodymyr-tkachuk-profile.webp",
    imageAlt: "Володимир Ткачук, тренер Avangard Jiu-Jitsu",
    imageObjectPosition: "center 20%",
    profileImageSrc: "/media/coaches/volodymyr-tkachuk-profile.webp",
    profileImageAlt: "Володимир Ткачук у кімоно в залі Avangard Jiu-Jitsu",
    profileImageObjectPosition: "center 20%",
  },
];
