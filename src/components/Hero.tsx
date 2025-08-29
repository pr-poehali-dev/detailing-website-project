import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/img/7d1f24d5-7df9-473c-982e-741ea3ef6d59.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            ДЕТЕЙЛИНГ
            <span className="block text-gold-500">ПРЕМИУМ КЛАССА</span>
          </h1>
          
          <p className="font-open-sans text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Профессиональный уход за вашим автомобилем. Восстановление и защита с использованием премиальных материалов и новейших технологий.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-montserrat font-semibold px-8 py-4 text-lg">
              <Icon name="Calendar" className="h-5 w-5 mr-2" />
              Записаться на услугу
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black font-montserrat font-semibold px-8 py-4 text-lg">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-gold-500/20">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="Award" className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">5+ лет опыта</h3>
              <p className="font-open-sans text-gray-300 text-center">Профессиональная команда с большим опытом работы</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-gold-500/20">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="Shield" className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">100% гарантия</h3>
              <p className="font-open-sans text-gray-300 text-center">Качество работы подтверждено гарантией</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-gold-500/20">
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center mb-4">
                <Icon name="Star" className="h-6 w-6 text-black" />
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">Премиум материалы</h3>
              <p className="font-open-sans text-gray-300 text-center">Используем только лучшие материалы и оборудование</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-8 w-8 text-white" />
      </div>
    </section>
  );
};

export default Hero;