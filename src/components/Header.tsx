import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shadow-lg">
              <Icon name="Car" className="h-6 w-6 text-black" />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-xl leading-none text-white">PREMIUM</span>
              <span className="font-montserrat font-medium text-sm text-gold-500 leading-none">AUTO DETAILING</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-open-sans hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="font-open-sans hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="font-open-sans hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="font-open-sans hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gold-500 hover:bg-gold-600 text-black font-montserrat font-semibold">
            <Icon name="Phone" className="h-4 w-4 mr-2" />
            Записаться
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;