const projects = [
  {
    id: 'manga-ocr',
    name: 'โครงการแปลภาษาจากมังงะด้วย OCR',
    category: 'AI / OCR / NLP',
    description:
      'ระบบช่วยแยกข้อความจากภาพมังงะและส่งต่อไปยังกระบวนการแปลเพื่อให้เข้าใจเนื้อหาได้เร็วขึ้น',
    stack: ['Python', 'OCR', 'OpenCV', 'Tesseract', 'Image Processing'],
    status: 'โปรเจคทางการศึกษา',
    image: '/images/portfolio/ocr-cover.png',
    imageAlt: 'ภาพหน้าปกมังงะสำหรับโครงการ OCR แปลภาษา',
    detailImage: '/images/portfolio/ocr-cover.png',
    beforeImage: '/images/portfolio/manga-before.png',
    afterImage: '/images/portfolio/manga-after.png',
    gallery: [
      '/images/portfolio/ocr-cover.png',
      '/images/portfolio/manga-before.png',
      '/images/portfolio/manga-after.png',
    ],
    overview:
      'โครงการนี้มุ่งเน้นให้ผู้อ่านสามารถเข้าใจเนื้อหาของมังงะได้เร็วขึ้น โดยใช้เทคนิค OCR ร่วมกับการประมวลผลภาพและการคัดแยกข้อความจากภาพ',
    challenge:
      'ข้อความในมังงะมักมีรูปแบบตัวอักษรที่แปลก โครงสร้างไม่แน่นอน และวางทับอยู่กับภาพประกอบ จึงยากต่อการอ่านแบบตรงไปตรงมาหากไม่มีการปรับแต่งภาพก่อน',
    solution:
      'ระบบจะทำการปรับความคมชัด คัดแยกบริเวณข้อความและตัดกล่องข้อความออกจากภาพก่อน แล้วจึงนำไปประมวลผลด้วย OCR เพื่อให้ได้ข้อความที่สามารถอ่านและแปลต่อได้',
    impact:
      'ช่วยลดเวลาและความยากลำบากในการอ่านเนื้อหาที่เป็นภาษาญี่ปุ่น และเป็นแนวทางที่เอื้อต่อการพัฒนาแอปแปลและช่วยอ่านหนังสือภาพในอนาคต',
    tools: [
      {
        name: 'Python',
        logo: '/images/skills/icons/python.svg',
        description: 'ใช้เขียนกระบวนการประมวลผลภาพและคำนวณข้อความก่อนส่งไปยังเครื่องมือ OCR',
      },
      {
        name: 'OpenCV',
        logo: '/images/skills/icons/python.svg',
        description: 'ใช้ปรับความคมชัด จัดการภาพ และตัดข้อความออกจากบริเวณภาพประกอบ',
      },
      {
        name: 'Tesseract',
        logo: '/images/skills/icons/python.svg',
        description: 'ใช้แปลงภาพข้อความเป็นข้อความที่สามารถอ่านและนำไปแปลต่อได้',
      },
      {
        name: 'Image Processing',
        logo: '/images/skills/icons/python.svg',
        description: 'ใช้ทำความสะอาดภาพ ลดสัญญาณรบกวน และพัฒนาความแม่นยำของการอ่านข้อความ',
      },
      {
        name: 'NLP',
        logo: '/images/skills/icons/api.svg',
        description: 'ใช้จัดการข้อความหลังจาก OCR เพื่อให้ผลลัพธ์สอดคล้องและพร้อมสำหรับการแปลต่อ',
      },
    ],
  },
  {
    id: 'xo-game',
    name: 'เกม XO',
    category: 'GAME / UI / LOGIC',
    description:
      'เกม XO แบบเล่นคนละฝั่งที่มีลอจิกการคำนวณผลแพ้ชนะและอินเทอร์เฟซที่ตอบสนองต่อการเล่นได้จริง',
    stack: ['JavaScript', 'HTML', 'CSS', 'Game Logic'],
    status: 'โปรเจคในรายวิชา',
    image: '/images/portfolio/xo-cover.svg',
    imageAlt: 'ภาพหน้าปกเกม XO ที่ชัดเจนว่ามีสัญลักษณ์ X และ O บนกระดานเกม',
    detailImage: '/images/portfolio/xo-board.svg',
    beforeImage: '/images/portfolio/xo-cover.svg',
    afterImage: '/images/portfolio/xo-showcase.svg',
    gallery: [
      '/images/portfolio/xo-cover.svg',
      '/images/portfolio/xo-board.svg',
      '/images/portfolio/xo-showcase.svg',
    ],
    overview:
      'โครงการนี้ถูกออกแบบเพื่อสาธิตการประยุกต์ใช้ตรรกะเกม การจัดการสถานะ และการออกแบบหน้าเว็บที่ตอบสนองต่อผู้ใช้ในรูปแบบเกมง่าย ๆ',
    challenge:
      'แม้จะเป็นเกมที่เรียบง่าย แต่กติกาเรื่องการสลับตาเล่น การตรวจผลชนะ และการแจ้งผู้ชนะต้องมีความถูกต้องและชัดเจน เพื่อให้ผู้ใช้งานรู้สถานะของเกมได้ทันที',
    solution:
      'ระบบใช้โครงสร้างสถานะบอร์ดแบบสตริงหรืออาร์เรย์เพื่อเก็บการเล่นแต่ละตา และตรวจเงื่อนไขชนะทุกครั้งที่มีการกดเลือกช่อง พร้อมแสดงข้อความแพ้ชนะหรือเสมออย่างชัดเจน',
    impact:
      'ผลลัพธ์คือเกม XO ที่เล่นได้จริง มีความสวยงามและตอบสนองอย่างรวดเร็ว เหมาะสำหรับการเรียนรู้แนวคิดด้านตรรกะโปรแกรมและการออกแบบอินเทอร์เฟซ',
    tools: [
      {
        name: 'JavaScript',
        logo: '/images/skills/icons/javascript.svg',
        description: 'ใช้ควบคุมการเล่น สลับผู้เล่น และตรวจสอบว่ามีผู้ชนะหรือเสมอหรือไม่',
      },
      {
        name: 'HTML5',
        logo: '/images/skills/icons/html5.svg',
        description: 'ใช้สร้างโครงสร้างเกมและปุ่มเลือกช่องที่ผู้เล่นสามารถกดได้',
      },
      {
        name: 'CSS3',
        logo: '/images/skills/icons/css3.svg',
        description: 'ใช้จัดการสี ขนาด กล่อง และโทนสไตล์ให้เกมดูทันสมัยและอ่านง่าย',
      },
      {
        name: 'Game Logic',
        logo: 'GL',
        description: 'ใช้ตรวจสอบแนวชนะทั้งหมดและกำหนดเงื่อนไขการสิ้นสุดเกมอย่างถูกต้อง',
      },
    ],
  },
]

export default projects
