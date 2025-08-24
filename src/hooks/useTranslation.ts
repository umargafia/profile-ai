import { useApp } from '../contexts/AppContext';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    login: 'Login',
    signup: 'Sign Up',
    logout: 'Logout',
    profile: 'Profile',
    
    // Homepage
    heroTitle: 'Elevate Your Career with AI-Powered Headshots & Resumes',
    heroSubtitle: 'Professional headshots and ATS-optimized resumes in minutes. Trusted by thousands of job seekers worldwide.',
    generateHeadshot: 'Generate Headshot',
    buildResume: 'Build Resume',
    
    // Headshot Generator
    uploadSelfie: 'Upload Selfie',
    selectStyle: 'Select Style',
    customize: 'Customize',
    download: 'Download',
    dragDropText: 'Drag & drop your selfie here, or click to browse',
    fileRequirements: 'JPEG or PNG, max 5MB, minimum 500x500px',
    tipsTitle: 'Tips for Best Results',
    tipLighting: 'Use good lighting',
    tipFacing: 'Face the camera directly',
    tipBackground: 'Use a clear background',
    tipSmile: 'Smile naturally',
    
    // Resume Builder
    selectTemplate: 'Select Template',
    inputDetails: 'Input Details',
    preview: 'Preview',
    export: 'Export',
    personalInfo: 'Personal Information',
    workExperience: 'Work Experience',
    education: 'Education',
    skills: 'Skills',
    
    // Common
    continue: 'Continue',
    back: 'Back',
    save: 'Save',
    cancel: 'Cancel',
    loading: 'Loading...',
    processing: 'Processing...',
    error: 'Error',
    success: 'Success',
    upgrade: 'Upgrade to Premium',
    
    // Privacy
    privacyNotice: 'Your photos are automatically deleted after 24 hours in the free tier.',
    secureUpload: 'Secure upload',
    dataEncrypted: 'Your data is encrypted during processing',
    
    // Usage limits
    usageLimit: 'Usage Limit',
    headshotsRemaining: 'headshots remaining this month',
    resumesRemaining: 'resumes remaining this month',
  },
  es: {
    // Navigation
    home: 'Inicio',
    features: 'Características',
    pricing: 'Precios',
    login: 'Iniciar Sesión',
    signup: 'Registrarse',
    logout: 'Cerrar Sesión',
    profile: 'Perfil',
    
    // Homepage
    heroTitle: 'Eleva tu Carrera con Fotos de Perfil y Currículums con IA',
    heroSubtitle: 'Fotos profesionales y currículums optimizados para ATS en minutos. Confiado por miles de buscadores de empleo en todo el mundo.',
    generateHeadshot: 'Generar Foto de Perfil',
    buildResume: 'Crear Currículum',
    
    // Headshot Generator
    uploadSelfie: 'Subir Selfie',
    selectStyle: 'Seleccionar Estilo',
    customize: 'Personalizar',
    download: 'Descargar',
    dragDropText: 'Arrastra y suelta tu selfie aquí, o haz clic para explorar',
    fileRequirements: 'JPEG o PNG, máximo 5MB, mínimo 500x500px',
    tipsTitle: 'Consejos para Mejores Resultados',
    tipLighting: 'Usa buena iluminación',
    tipFacing: 'Mira directamente a la cámara',
    tipBackground: 'Usa un fondo claro',
    tipSmile: 'Sonríe naturalmente',
    
    // Resume Builder
    selectTemplate: 'Seleccionar Plantilla',
    inputDetails: 'Ingresar Detalles',
    preview: 'Vista Previa',
    export: 'Exportar',
    personalInfo: 'Información Personal',
    workExperience: 'Experiencia Laboral',
    education: 'Educación',
    skills: 'Habilidades',
    
    // Common
    continue: 'Continuar',
    back: 'Atrás',
    save: 'Guardar',
    cancel: 'Cancelar',
    loading: 'Cargando...',
    processing: 'Procesando...',
    error: 'Error',
    success: 'Éxito',
    upgrade: 'Actualizar a Premium',
    
    // Privacy
    privacyNotice: 'Tus fotos se eliminan automáticamente después de 24 horas en el nivel gratuito.',
    secureUpload: 'Subida segura',
    dataEncrypted: 'Tus datos están encriptados durante el procesamiento',
    
    // Usage limits
    usageLimit: 'Límite de Uso',
    headshotsRemaining: 'fotos de perfil restantes este mes',
    resumesRemaining: 'currículums restantes este mes',
  },
  zh: {
    // Navigation
    home: '首页',
    features: '功能',
    pricing: '定价',
    login: '登录',
    signup: '注册',
    logout: '退出',
    profile: '个人资料',
    
    // Homepage
    heroTitle: '用AI驱动的头像和简历提升您的职业生涯',
    heroSubtitle: '几分钟内获得专业头像和ATS优化简历。受到全球数千名求职者的信赖。',
    generateHeadshot: '生成头像',
    buildResume: '制作简历',
    
    // Headshot Generator
    uploadSelfie: '上传自拍',
    selectStyle: '选择风格',
    customize: '自定义',
    download: '下载',
    dragDropText: '将自拍拖放到此处，或点击浏览',
    fileRequirements: 'JPEG或PNG格式，最大5MB，最小500x500像素',
    tipsTitle: '获得最佳效果的提示',
    tipLighting: '使用良好的照明',
    tipFacing: '直视相机',
    tipBackground: '使用清晰的背景',
    tipSmile: '自然微笑',
    
    // Resume Builder
    selectTemplate: '选择模板',
    inputDetails: '输入详情',
    preview: '预览',
    export: '导出',
    personalInfo: '个人信息',
    workExperience: '工作经验',
    education: '教育背景',
    skills: '技能',
    
    // Common
    continue: '继续',
    back: '返回',
    save: '保存',
    cancel: '取消',
    loading: '加载中...',
    processing: '处理中...',
    error: '错误',
    success: '成功',
    upgrade: '升级到高级版',
    
    // Privacy
    privacyNotice: '您的照片在免费版本中会在24小时后自动删除。',
    secureUpload: '安全上传',
    dataEncrypted: '您的数据在处理过程中已加密',
    
    // Usage limits
    usageLimit: '使用限制',
    headshotsRemaining: '本月剩余头像数量',
    resumesRemaining: '本月剩余简历数量',
  },
};

export function useTranslation() {
  const { state } = useApp();
  
  const t = (key: keyof typeof translations.en): string => {
    return translations[state.language][key] || translations.en[key] || key;
  };

  return { t, language: state.language };
}