/** Lock-screen codes — either unlocks */
export const PASSCODES = ['1010'] as const
export const PASSCODE = PASSCODES[0]

/** Birthday girl — used across stages */
export const HER_NAME = 'Kashaf'

export const WRONG_ROASTS = [
  'not even close 😭',
  'really?',
  'okay last chance for my favorite person',
  `${HER_NAME}, try again 💗`,
]

export const PASSCODE_SHUFFLE_CAPTION = 'numbers get shy when you’re wrong 😏'

export const FUN_FACTS_TRICK_LABEL = 'not yet 👀'
export const FUN_FACTS_CONTINUE_LABEL = 'okay… keep going →'

export const FAKE_OFFLINE = {
  title: 'No internet connection 📡',
  subtitle: 'Trying to reconnect…',
  loading: 'Loading… 0%',
  kidding: 'just kidding, one more surprise ✨',
}

export const FAKE_GLITCH = {
  code: '404',
  title: "you're not supposed to be here 👀",
  subtitle: 'wrong universe… redirecting',
  wink: 'jk — right this way ✨',
}

export const STUCK_LOADING = {
  label: 'Wrapping up the surprise…',
  stall: '99%… almost…',
  done: 'gotcha — just kidding 💗',
}

export const BUTTON_SWAP = {
  continue: 'continue →',
  stay: '← stay a bit',
  swapHint: 'oops, buttons got mixed up 🙈',
}

export const FAKE_NOTIFICATION = {
  title: '1 new notification',
  body: "You've been pranked 🎉",
}

export const BALLOON_WELCOME = {
  title: "Welcome to  Little Universe 🎈",
  subtitle: `a little garden of surprises, just for ${HER_NAME}`,
  continue: 'come on in →',
}

export const GARDEN_MESSAGES = [
  `You make ordinary days feel magical, ${HER_NAME} ✨`,
  'Still my favorite argument partner 😌',
  `Kucchu pucchu forever, ${HER_NAME} 💗`,
  'Every universe somehow still has us',
  'Thank you for choosing this story',
]

export const GARDEN_CARD = {
  title: `Happy Birthday, ${HER_NAME}!`,
  lines: [
    'May your life be as beautiful, colorful,',
    'and bright as this garden of tulips! ♥',
  ],
  wish: `Wishing you endless joy and beautiful moments, ${HER_NAME}!`,
}

export const GARDEN_CONTINUE = 'continue to fun facts →'
export const GARDEN_HINT = 'Tap the tulips to wake the garden 🌷'
export const GARDEN_GIFT_HINT = 'A gift appeared — tap to open 🎁'

export type GalleryItem = {
  src: string
  caption: string
  title: string
}

export const GALLERY: GalleryItem[] = [
  {
    src: '/gallery/memory-1.jpeg',
    title: 'A FEW MOMENTS, KEPT SAFE',
    caption: 'from arguments… to forever',
  },
  {
    src: '/gallery/memory-2.jpeg',
    title: 'A FEW MOMENTS, KEPT SAFE',
    caption: 'even the quiet days feel warmer with you',
  },
  {
    src: '/gallery/memory-3.jpeg',
    title: 'A FEW MOMENTS, KEPT SAFE',
    caption: 'us, blooming slowly',
  },
  {
    src: '/gallery/memory-4.jpeg',
    title: 'A FEW MOMENTS, KEPT SAFE',
    caption: 'small memories, kept forever',
  },
  {
    src: '/gallery/memory-5.jpeg',
    title: 'A FEW MOMENTS, KEPT SAFE',
    caption: 'in every universe, somehow still us',
  },
]

export const FUN_FACTS = [
  '❤️ Our Beginning: From classmates to soulmates.',
  '🎶 Our Memories: Songs, laughter, and little moments.',
  '🫶 Our Little Moments: Every second with you is special. ❤️',
  '💗 My Favourite Person: You became my whole world.',
  '♾️ Our Forever: You and me, always. 💋',
]

export const LETTER = {
  greeting: 'Happy Birthday,',
  nickname: 'My kucchu pucchu,',
  body: [
    ` ❤️🎂 HAPPY BIRTHDAY, MERI JAAN! 🎀💗

Kabhi socha nahi tha ke ek din woh stranger, jisse meri kabhi theek se baat bhi nahi hua karti thi, meri zindagi ka sabse important hissa ban jayegi. 🥹❤️ Hum toh bas class fellows thay, lekin phir woh maths ka paper aaya aur pata hi nahi chala kab humari baatein badhne lagin, kab tum mere liye special banne lagin aur kab ek stranger se tum meri zindagi ka sabse khoobsurat hissa ban gayi. Uske baad tumhare saath project karna, craft banana, exhibition ki preparations, saath ghoomna, golgappay khana aur tumhara intezaar karna… jaan, mujhe aaj bhi woh saare moments yaad hain. 🫶🏻💗

Phir pata hi nahi chala kab tum meri favourite person ban gayi, kab tumse baat karna meri aadat ban gayi aur kab mujhe tumse mohabbat ho gayi. ❤️🥹 Tumhare saath woh random conversations, saath hansna, ek doosre ko tang karna aur woh saari choti choti memories mere liye bohat special hain. Aur phir aaya 9 October, woh din jab hum mile aur tumhare saath kuch aise khoobsurat moments share kiye jo mere dil ke hamesha kareeb rahenge. 🫂❤️‍🩹 Woh din, woh feelings aur tumhare saath guzara hua woh waqt meri favourite memories mein se hain.

I LOVE YOU SO MUCH, MERI JAAN! ❤️💋 Tum woh stranger ho jisse meri kahani shuru hui thi, aur aaj tum woh insan ho jiske saath main apni aane wali zindagi ki aur bhi khoobsurat memories banana chahta hoon. Happy Birthday, meri favourite girl, meri happiness, meri mohabbat, meri churail! 🫂♾️❤️

`,
  ],
  signoff: 'Hamesha tumhara,',
  /** Change this to your name before sharing */
  name: 'Your Jin 🫂',
}

export const REVEAL_LINE = 'Open the gift box'
export const REVEAL_HINT =
  'After this, look for the real box I left for you nearby — open that one too.'

/** Secret code to open the gift inbox (for you — not for her) */
export const GIFT_INBOX_PASSCODE = 'giftbox'

export const GIFT_WISH = {
  badge: 'Mandatory · last step',
  title: `Stop, ${HER_NAME} ✋`,
  strict: 'You cannot finish this surprise without telling me your gift wish.',
  subtitle:
    'Be honest and specific — write the gift YOU want. No skipping. No “anything is fine”.',
  label: 'The gift I want is…',
  placeholder: 'e.g. a soft hoodie, a watch, a day out together, earrings…',
  hint: 'Minimum a few words. This is required 🔒',
  submit: 'Lock my gift wish 🔒',
  errorEmpty: 'Nope — you must write a gift wish first.',
  errorShort: 'Too short. Tell me clearly what you want 🥺',
  successTitle: 'Wish locked 💝',
  successBody: 'I will see this. No take-backs. Thank you for telling me, jaan.',
}
