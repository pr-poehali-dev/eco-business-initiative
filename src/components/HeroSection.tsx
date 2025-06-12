import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Устойчивое
                <span className="text-green-600"> будущее</span>
                вашего бизнеса
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Помогаем организациям внедрить экологически устойчивые практики,
                снизить затраты и повысить эффективность рабочих процессов
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
              >
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg"
              >
                Узнать больше
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">200+</div>
                <div className="text-sm text-slate-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">30%</div>
                <div className="text-sm text-slate-600">Экономия энергии</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-sm text-slate-600">Лет опыта</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop"
                alt="Современный экологичный офис"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-full">
                <Icon name="Leaf" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
