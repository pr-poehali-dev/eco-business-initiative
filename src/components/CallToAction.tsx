import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="container mx-auto max-w-4xl">
        <Card className="border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-6">
                <Icon
                  name="MessageCircle"
                  size={32}
                  className="text-green-600"
                />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Готовы сделать ваш бизнес экологичнее?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Получите бесплатную консультацию и узнайте, как внедрить
                устойчивые практики с максимальной выгодой для вашей компании
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                >
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Записаться на консультацию
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg"
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить сейчас
                </Button>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Icon name="Mail" size={16} />
                    <span>info@ecoconsult.ru</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Icon name="Phone" size={16} />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-600">
                    <Icon name="Clock" size={16} />
                    <span>Пн-Пт 9:00-18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;
