import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="relative w-8 h-8 rounded-full bg-white p-1 shadow-md">
              <img 
                src="https://cdn.poehali.dev/files/39d55219-fa21-47d8-ba11-45e1d4830dc2.jpeg" 
                alt="EX Excellence Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-montserrat font-bold text-lg leading-none">EX</span>
              <span className="font-montserrat font-medium text-xs text-primary leading-none">EXCELLENCE</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" className="h-5 w-5" />
            </a>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="text-center text-muted-foreground font-open-sans text-sm">
          <p>&copy; 2024 Premium Auto. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;