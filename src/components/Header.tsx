import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-full bg-white p-2 shadow-lg">
              <img 
                src="https://cdn.poehali.dev/files/39d55219-fa21-47d8-ba11-45e1d4830dc2.jpeg" 
                alt="EX Excellence Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-xl leading-none">EX</span>
              <span className="font-montserrat font-medium text-sm text-primary leading-none">EXCELLENCE</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="font-open-sans hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="font-open-sans hover:text-primary transition-colors">О нас</a>
            <a href="#gallery" className="font-open-sans hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="font-open-sans hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-montserrat font-semibold">
            <Icon name="Phone" className="h-4 w-4 mr-2" />
            Записаться
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;