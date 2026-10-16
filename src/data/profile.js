const profile = {
  role: 'วิศวกรรมคอมพิวเตอร์',
  focus: 'ระบบฝังตัว · IoT · ซอฟต์แวร์',
  summary:
    'สนใจในการเชื่อมต่อซอฟต์แวร์กับฮาร์ดแวร์ ตั้งแต่ไมโครคอนโทรลเลอร์ เซ็นเซอร์ ไปจนถึงระบบ IoT และแอปพลิเคชันฝังตัวที่ใช้งานได้จริง',
  about:
    'ชื่อ-นามสกุล : ภูริยุทธ ราคางาม รหัสประจำตัวนักศึกษา : 6603051624172 เป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ที่มีความสนใจในระบบฝังตัวและ IoT มีความสามารถในการเขียนโปรแกรมด้วยภาษา C/C++, Python, JavaScript และ Java รวมถึงการพัฒนาเว็บด้วย HTML, CSS และ React นอกจากนี้ยังมีประสบการณ์ในการทำงานกับ Arduino และ ESP32 รวมถึงการเชื่อมต่ออุปกรณ์ผ่าน MQTT และ API',
  education: {
    institution: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
    abbreviation: 'KMUTNB',
    program: 'EnET-C',
    logo: 'https://www.kmutnb.ac.th/KMUTNB/media/kmutnb/images/kmutnb_index_Logo.png',
  },
  skills: [
    {
      name: 'C / C++',
      category: 'การเขียนโปรแกรม',
      level: 65,
      description: 'สร้างตรรกะที่มีประสิทธิภาพ และพัฒนาซอฟต์แวร์ระบบฝังตัวสำหรับงานแบบเวลาจริง',
      logos: [{ src: '/images/skills/icons/cplusplus.svg', alt: 'C++ logo' }],
    },
    {
      name: 'Python',
      category: 'การเขียนโปรแกรม',
      level: 85,
      description: 'ช่วยประมวลผลข้อมูล อัตโนมัติการทำงาน และสร้างต้นแบบสำหรับงาน AI และสคริปต์',
      logos: [{ src: '/images/skills/icons/python.svg', alt: 'Python logo' }],
    },
    {
      name: 'JavaScript',
      category: 'การเขียนโปรแกรม',
      level: 60,
      description: 'จัดการตรรกะการโต้ตอบของหน้าเว็บและพฤติกรรมแอปพลิเคชันแบบไดนามิก',
      logos: [{ src: '/images/skills/icons/javascript.svg', alt: 'JavaScript logo' }],
    },
    {
      name: 'Java',
      category: 'การเขียนโปรแกรม',
      level: 50,
      description: 'รองรับการพัฒนาซอฟต์แวร์แบบโครงสร้างและงานด้านการศึกษาเชิงวิศวกรรม',
      logos: [{ src: '/images/skills/icons/java.svg', alt: 'Java logo' }],
    },
    {
      name: 'HTML / CSS',
      category: 'เว็บ',
      level: 75,
      description: 'ออกแบบโครงสร้างหน้าเว็บ การจัดวางภาพ และความสวยงามของอินเทอร์เฟซแบบตอบสนอง',
      logos: [
        { src: '/images/skills/icons/html5.svg', alt: 'HTML5 logo' },
        { src: '/images/skills/icons/css3.svg', alt: 'CSS3 logo' },
      ],
    },
    {
      name: 'React',
      category: 'เว็บ',
      level: 60,
      description: 'สร้าง component ที่สามารถนำกลับมาใช้ซ้ำได้และพัฒนาประสบการณ์ผู้ใช้แบบโต้ตอบ',
      logos: [{ src: '/images/skills/icons/react.svg', alt: 'React logo' }],
    },
    {
      name: 'Arduino / ESP32',
      category: 'ระบบฝังตัว',
      level: 90,
      description: 'พัฒนาโค้ดควบคุมฮาร์ดแวร์และต้นแบบที่เชื่อมต่อกับเซ็นเซอร์และอุปกรณ์ต่าง ๆ',
      logos: [
        { src: '/images/skills/icons/arduino.svg', alt: 'Arduino logo' },
        { src: '/images/skills/icons/espressif.svg', alt: 'Espressif ESP32 logo' },
      ],
    },
    {
      name: 'เซ็นเซอร์ / IoT',
      category: 'ระบบฝังตัว',
      level: 40,
      description: 'รวมข้อมูลจากเซ็นเซอร์และอุปกรณ์เพื่อสร้างระบบตรวจวัดและระบบอัตโนมัติที่ใช้งานได้',
      logos: [{ src: '/images/skills/icons/iot-network.svg', alt: 'IoT sensor network icon' }],
    },
    {
      name: 'MQTT / API',
      category: 'เครื่องมือและการเชื่อมต่อ',
      level: 75,
      description: 'เชื่อมต่ออุปกรณ์และแอปพลิเคชันผ่านการสื่อสารแบบ lightweight และอินเตอร์เฟซบริการ',
      logos: [
        { src: '/images/skills/icons/mqtt.svg', alt: 'MQTT logo' },
        { src: '/images/skills/icons/api.svg', alt: 'API icon' },
      ],
    },
    {
      name: 'การสื่อสารภาษาอังกฤษ',
      category: 'ภาษา',
      level: 70,
      description: 'สื่อสารได้อย่างชัดเจนในงานนำเสนอ รายงาน และการสื่อสารทางเทคนิคกับผู้ร่วมทีม',
      logos: [{ src: '/images/skills/icons/language.svg', alt: 'Language icon' }],
    },
  ],
  contacts: [
    {
      name: 'Facebook',
      label: 'Phuriyut Rakangam',
      href: 'https://www.facebook.com/',
      logo: '/images/social/facebook.svg',
    },
    {
      name: 'Gmail',
      label: 's6603051624172@email.kmutnb.ac.th',
      href: 'mailto:s6603051624172@email.kmutnb.ac.th',
      logo: '/images/social/gmail.svg',
    },
    {
      name: 'Line',
      label: 'safex2004',
      href: 'https://line.me/ti/p/~safex2004',
      logo: '/images/social/line.svg',
    },
  ],
  email: 's6603051624172@email.kmutnb.ac.th',
}

export default profile
