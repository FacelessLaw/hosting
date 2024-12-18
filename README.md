Схема данных проиллюстрирована на [boards.yandex.ru](https://boards.yandex.ru/whiteboard/?hash=eded4556a5e5e679dce0c4f9f86568e6)

# Переменные и константы

## **OuterSupplyDVar** {#outersupply}

#### **Описание** {#opisanie}

Переменная, определяющая объём поступления материала от внешнего источника.

#### **Атрибуты** {#atributy}

* SupplierId - идентификатор поставщика \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода поставки \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* IsPrioritised - признак наличия приоритета выбора транспортного средства \[bool\] \[{blue}(месяц по дням)\];

* Priority - приоритет способа поставки на завод \[int, nullable\] \[{blue}(месяц по дням)\];

* DepartureDate - дата отгрузки материала \[DateTime\] (Primary key);

  * на годичном горизонте раз в месяц;

  * на месячном произвольно по дням;

* ArrivalDate - дата прибытия на завод отгрузки \[DateTime\];

  * = DepartureDate.AddDays([SupplyRoute](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#supplyroute).LeadTime);

* LowerLimit - минимальный объём поставки \[double, тысячи тонн / месяц\];

* UpperLimit - максимальный объём поставки \[double, тысячи тонн / месяц\];

* SupplyParty - партия поставки \[double, тысячи тонн / сутки\];

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн / месяц\]

* LowerBound - минимальный объём поставки \[double, тысячи тонн / месяц\]

  * = 0;

* UpperBound - максимальный объём поставки \[double, тысячи тонн / месяц\]

  * UpperLimit;

#### **Источники** {#istochniki}

Создаётся по всем возможным поставкам [OuterSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#outersupply) и всем достижимым по маршруту [SupplyRoute](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#supplyroute) заводам поставки.

## **SupplyMinPartyIndicatorDVar** {#outersupply}

#### **Описание** {#opisanie}

Индикаторная переменная, соответствующая переменной, определяющей объём поступления материала от внешнего источника, [OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie).

#### **Атрибуты** {#atributy}

* SupplierId - идентификатор поставщика \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода поставки \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* DepartureDate - дата отгрузки материала \[DateTime\] (Primary key);

  * на годичном горизонте раз в месяц;

  * на месячном произвольно по дням;

#### **Домен**

* Value - значение переменной \[boolean\]

* LowerBound - индикатор “выключен“ \[int\]

  * = 0;

* UpperBound - индикатор “включен“ \[int\]

  * = 1;

#### **Источники** {#istochniki}

Создаётся для каждой переменной [OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie), у которой не нулевая минимальная партия.

## **SupplyMinPartyIncrementDVar** {#outersupply}

#### **Описание** {#opisanie}

Переменная, описывающая количество партий поставки и соответствующая переменной, определяющей объём поступления материала от внешнего источника, [OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie).

#### **Атрибуты** {#atributy}

* SupplierId - идентификатор поставщика \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода поставки \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* DepartureDate - дата отгрузки материала \[DateTime\] (Primary key);

  * на годичном горизонте раз в месяц;

  * на месячном произвольно по дням;

#### **Домен**

* Value - значение переменной \[int, партии поставки\]

* LowerBound - минимальное число партий поставки \[int, партии поставки\]

  * = int([OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie).LowerLimit   / [OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie).SupplyParty \+ &[9e-1](347211));

* UpperBound - индикатор “включен“ \[int\]

  * = int([OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie).UpperLimit  / [OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie).SupplyParty);

#### **Источники** {#istochniki}

Создаётся для каждой переменной [OuterSupplyDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#opisanie), у которой не нулевая минимальная партия.

## **InnerSupplyConst** {#outersupply}

#### **Описание** {#opisanie}

Константа, описывающая объём произведённого материала от внутреннего источника.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор завода \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор производимого материала \[int\] (Primary key);

* ProductionDate - дата производства материала \[DateTime\] (Primary key);

  * {yellow}(на годичном горизонте раз в месяц);

  * на месячном произвольно по дням;

* ProducedVolume - произведённый объём материала \[double, тысячи тонн / месяц\];

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн / месяц\]

* LowerBound - минимальный объём производства \[double, тысячи тонн / месяц\]

  * = ProducedVolume;

* UpperBound - максимальный объём производства \[double, тысячи тонн / месяц\]

  * ProducedVolume;

#### **Источники** {#istochniki}

Создаётся по всем описанным производствам [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply).

## **StockIncomeConst** {#outersupply}

#### **Описание** {#opisanie}

Константа, описывающая объём поступающего на завод остатка.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор завода \[int\] (Primary key);

* MaterialId - идентификатор материала \[int\] (Primary key);

* WarehouseId - идентификатор склада поступления \[int\] (Primary key);

* AvaliableDate - дата доступности \[DateTime\] (Primary key);

* SourceId - идентификатор поставщика \[int\] (Primary key);

* IsExternal - признак внешнего поставщика \[bool\];

* Volume - объём запаса \[double, тысячи тонн\];

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн\]

* LowerBound - минимальный объём входящего остатка \[double, тысячи тонн\]

  * = Volume;

* UpperBound - максимальный объём входящего остатка \[double, тысячи тонн\]

  * Volume;

#### **Источники** {#istochniki}

Создаётся по всем описанным поступлениям остатка [Stock](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#stock).

## **FactoryMaterialValueDVar** {#outersupply}

#### **Описание** {#opisanie}

Переменная, описывающая объём материала на заводе в управляемый момент времени.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор поставляемого материала \[int\] (Primary key);

* WarehouseId - идентификатор склада хранения \[int\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* Date - дата отслеживания материального баланса \[DateTime\] (Primary key);

  * раз в день в общем случае;
  * для заводов, являющихся внутренними поставщиками, баланс на годичном горизонте фиксируется раз в месяц;

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн / сутки\]

* LowerBound - минимальный хранимый объём\[double, тысячи тонн / сутки\]

  * = 0;

* UpperBound - максимальный хранимый объём \[double, тысячи тонн / сутки\]

  * = [FactoryWarehouseMaterialMaxVolume](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factorywarehousematerialmaxvolume).MaxVolume  или INF;

#### **Источники** {#istochniki}

Создаётся по всем возможным поставкам [OuterSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#outersupply) и всем достижимым по маршруту [SupplyRoute](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#supplyroute) заводам поставки; всем внутренним производствам [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply) и достижимым маршрутам [FactoryRoute](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factoryroute); всем целевым продуктам из производств по рецептурам [ProductionRecipe](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#productionrecipe) и достижимым маршрутам [FactoryRoute](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factoryroute); по всем входящим остаткам [Stock](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#stock).

## **FactoryMaterialNormativeValueDVar \[{green}(Этап формирования нормативных остатков)\]** {#outersupply}

#### **Описание** {#opisanie}

Переменная, описывающая объём материала на заводе в управляемый момент времени, хранимого под нормативный запас. Создаются только для соответствующего этапа и дублируют переменные [FactoryMaterialValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#factorymaterialvaluedvar).

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор поставляемого материала \[int\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* WarehouseId - идентификатор склада поступления \[int\] (Primary key);

* Date - дата отслеживания материального баланса \[DateTime\] (Primary key);

  * раз в день в общем случае;
  * для заводов, являющихся внутренними поставщиками, баланс на годичном горизонте фиксируется раз в месяц;

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн / сутки\]

* LowerBound - минимальный хранимый объём\[double, тысячи тонн / сутки\]

  * = 0;

* UpperBound - максимальный хранимый объём \[double, тысячи тонн / сутки\]

  * = [NormativeStockLevel](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#normativestocklevel).Volume;

#### **Источники** {#istochniki}

Создаётся по всем [FactoryMaterialValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#factorymaterialvaluedvar), для которых существует [NormativeStockLevel](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#normativestocklevel).

## **RecipeProductionDVar** {#outersupply}

#### **Описание** {#opisanie}

Переменная, описывающая объём производства по рецептуре в управляемый момент времени.

#### **Атрибуты** {#atributy}

* RecipeId - идентификатор рецептуры производства \[int\] (Primary key);

* Date - дата производства \[DateTime\] (Primary key);

  * раз в день;

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн / сутки\]

* LowerBound - минимальный производимый объём\[double, тысячи тонн / сутки\]

  * = 0;

* UpperBound - максимальный производимый объём \[double, тысячи тонн / сутки\]

  * = INF;

#### **Источники** {#istochniki}

Создаётся по всем рецептурам из сущностей [ProductionRecipe](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#productionrecipe).

## **DowntimeDVar** {#outersupply}

#### **Описание** {#opisanie}

Переменная, определяющая старт ремонта производственной единицы в управляемый момент времени.

#### **Атрибуты** {#atributy}

* ProducerId - идентификатор ремонтируемой производственной  единицы \[int\] (Primary key);

* DowntimeType - тип ремонтных работ, требующих уменьшения мощностей \[int\] (Primary key);

* {yellow}(TemplateId) - шаблон производительности при ремонтных работах \[int\];

* SpecificDowntimeId - идентификатор конкретных ремонтных работ\[int\] (Alt primary key);

* DowntimeQueueId - идентификатор очереди ремонтных работ \[int\];

  * 1 \<=\> DowntimeType == ППР;
  * 0 иначе;

* StartDate - дата начала ремонтных работ \[DateTime\] (Primary key);

* EndDate - дата окончания ремонтных работ \[DateTime\];

  * высчитывается по [ProductivityTemplate](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#productivitytemplate) или [DowntimeProductivityInfo](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#downtimeproductivityinfo);

#### **Домен** {#atributy}

* Value - значение переменной \[boolean\]

* LowerBound - ремонт не начинается в фиксированную дату \[int\]

  * = 0;

* UpperBound - ремонт начинается в фиксированную дату \[int\]

  * = 1;

#### **Источники** {#istochniki}

По всем перечням ремонтных работ [PlanDowntime](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#plandowntime).

## **MaterialMovementDVar** {#outersupply5}

#### **Описание** {#opisanie5}

Переменная, описывающая объём перемещаемого материала между фиксированной парой заводов в управляемый момент времени.

#### **Атрибуты** {#atributy8}

* SourceFactoryId - идентификатор завода отгрузки \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода приёмки \[int\] (Primary key);

* MaterialId - идентификатор перевозимого материала \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* IsPrioritised - признак наличия приоритета выбора транспортного средства \[bool\] \[{blue}(месяц по дням)\];

* Priority - приоритет способа поставки на завод \[int, nullable\] \[{blue}(месяц по дням)\];

* DepartureDate - дата отгрузки \[DateTime\] (Primary key);

  * на годичном горизонте раз в месяц;

  * на месячном произвольно по дням;

* LeadTime - плечо поставки \[int, сутки\];

* ArrivalDate - дата прибытия \[DateTime\];

  * = DepartureDate.AddDays(LeadTime);

* SupplyParty - партия поставки \[double, тысячи тонн / сутки\];

* LowerLimit - минимальный объём поставки \[double, тысячи тонн / месяц\]

  * = {yellow}(0) или [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply).LowerLimit;

* UpperLimit - максимальный объём поставки \[double, тысячи тонн / месяц\]

  * = [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply).UpperLimit;

#### **Домен** {#atributy9}

* Value - значение переменной \[numeric/continues, тысячи тонн / сутки\]

* LowerBound - минимальный перевозимый объём\[double, тысячи тонн / сутки\]

  * = 0;

* UpperBound - максимальный перевозимый объём \[double, тысячи тонн / сутки\]

  * = [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply).UpperLimit;

#### **Источники** {#istochniki5}

Создаётся по всем маршрутам [FactoryRoute](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factoryroute) и пересечению материалов заводов маршрута из [FactoryMaterialValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#FactoryMaterialValueDVar), дополняемым информацией о месячных ограничениях отгрузки из [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply), если завод-отправитель является поставщиком.

## **MaterialMovementMinPartyIndicatorDVar** {#outersupply}

#### **Описание** {#opisanie}

Индикаторная переменная, соответствующая переменным, определяющим объём перемещаемого материала между фиксированной парой заводов в управляемый момент времени, [MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar).

#### **Атрибуты** {#atributy}

* SourceFactoryId - идентификатор завода отгрузки \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода приёмки \[int\] (Primary key);

* MaterialId - идентификатор перевозимого материала \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* Month - дата начала месяца \[DateTime\] (Primary key);

#### **Домен**

* Value - значение переменной \[boolean\]

* LowerBound - индикатор “выключен“ \[int\]

  * = 0;

* UpperBound - индикатор “включен“ \[int\]

  * = 1;

#### **Источники** {#istochniki}

Создаётся для переменных [MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar) каждого месяца, у которых ненулевая минимальная партия.

## **MaterialMovementMinPartyIncrementDVar** {#outersupply}

#### **Описание** {#opisanie}

Переменная, описывающая количество партий поставки и соответствующая переменной, определяющей объём перемещаемого материала между фиксированной парой заводов в управляемый момент времени, [MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar).

#### **Атрибуты** {#atributy}

* SourceFactoryId - идентификатор завода отгрузки \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода приёмки \[int\] (Primary key);

* MaterialId - идентификатор перевозимого материала \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* DepartureDate - дата отгрузки \[DateTime\] (Primary key);

#### **Домен**

* Value - значение переменной \[int, партии поставки\]

* LowerBound - минимальное число партий поставки \[int, партии поставки\]

  * = int([MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar).LowerLimit   / [MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar).SupplyParty \+ &[9e-1](347211));

* UpperBound - индикатор “включен“ \[int\]

  * = int([MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar).UpperLimit  / [MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar).SupplyParty);

#### **Источники** {#istochniki}

Создаётся для каждой переменной [MaterialMovementDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#materialmovementdvar), у которой не нулевая минимальная партия.

## **FactoryWarehouseMovementDVar \[**{blue}(Месяц по дням)**\]** {#outersupply5}

#### **Описание** {#opisanie5}

Переменная, описывающая объём перемещаемого материала между фиксированной парой складов одного завода в управляемый момент времени.

#### **Атрибуты** {#atributy8}

* FactoryId - идентификатор завода \[int\] (Primary key);

* SourceWarehouseId - идентификатор склада отгрузки \[int\] (Primary key);

* DestinationWarehouseId - идентификатор склада приёмки \[int\] (Primary key);

* MaterialId - идентификатор перемещаемого материала \[int\] (Primary key);

* Date - дата перемещения \[DateTime\] (Primary key);

* UpperLimit - максимальный объём выгрузки\[double, тысячи тонн / месяц\]

  * = [FactoryWarehouseMaterialMovement](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factorywarehousematerialmovement-mesyac-po-dnyam).UpperLimit;

#### **Домен** {#atributy9}

* Value - значение переменной \[numeric/continues, тысячи тонн / сутки\]

* LowerBound - минимальный перемещаемый объём\[double, тысячи тонн / сутки\]

  * = 0;

* UpperBound - максимальный перемещаемый объём \[double, тысячи тонн / сутки\]

  * = [FactoryWarehouseMaterialMovement](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factorywarehousematerialmovement-mesyac-po-dnyam).UpperLimit;

#### **Источники** {#istochniki5}

Создаётся по всем парам складов из [FactoryWarehouseMaterialMovement](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factorywarehousematerialmovement-mesyac-po-dnyam) фиксированного завода.

## **SaleRequirementConst** {#outersupply}

#### **Описание** {#opisanie}

Константа, описывающая объём потребности под продажу материала.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор площадки \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* Date - дата отгрузки под потребность \[DateTime\] (Primary key);

* Volume - объём потребности \[double, тысячи тонн\];

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн\]

* LowerBound - минимальный объём покрытия потребности \[double, тысячи тонн\]

  * = Volume;

* UpperBound - максимальный объём производства \[double, тысячи тонн\]

  * = Volume;

#### **Источники** {#istochniki}

Создаётся по всем описанным потребностям под продажу [SaleRequirement](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#salerequirement).

## **ThirdPartyRequirementDVar** {#outersupply}

#### **Описание** {#opisanie}

Переменная, описывающая объём отгрузки материала третьим лицам.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор поставщика \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* Date - дата отгрузки под потребность \[DateTime\] (Primary key);

* Volume - объём потребности \[double, тысячи тонн\];

#### **Домен** {#atributy}

* Value - значение переменной \[numeric/continues, тысячи тонн\]

* LowerBound - минимальный объём поставки \[double, тысячи тонн\]

  * = 0;

* UpperBound - максимальный объём поставки \[double, тысячи тонн\]

  * = UpperLimit;

#### **Источники** {#istochniki}

Создаётся по всем описанным потребностям под отгрузку третьим лицам [ThirdPartyRequirement](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#thirdpartyrequirement).

# Ограничения

## **MaterialBalanceConstraint** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, описывающее материальный баланс завода.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор завода \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор материала \[int\] (Primary key);

* WarehouseId - идентификатор склада поступления \[int\] (Primary key);

  * основной склад: агрегированный для сырья и результатов производства;

  * склад разгрузки: для хранения материалов на колёсах \[{blue}(месяц по дням)\];

  * напольные склады: для временного хранения \[{blue}(месяц по дням)\];

* Date - управляемый момент времени \[DateTime\] (Primary key);

  * в общем случае раз в день;

  * для заводов, являющихся внутренними поставщиками, баланс на годичном горизонте фиксируется раз в месяц;

#### **Функционал (зависимости от склада актуальны только для {blue}(месяца по дням))** {#atributy}

$$FactoryMaterialNormativeValueDVar(FactoryId = FactoryId, MaterialId = MaterialId, Date = Date)+ \\
+ FactoryMaterialValueDVar(FactoryId = FactoryID, MaterialId = MaterialId, Date = Date)+ \\
+ \sum_{x}{FactoryWarehouseMovementDVar(FactoryId = FactoryId, SourceWarehouseId = x, DestinationWarehouseId = WarehouseId, MaterialId = MaterialId, Date = Date)} + \\
+ \sum_{x, WarehouseId = склад разгрузки}{OuterSupplyDVar(SupplierId = x, MaterialID = MaterialId, DestinationFactoryId = FactoryId, ArrivalDate = Date)} + \\
+ \sum_{Recipe, WarehouseId = основной склад}{RecipeProductionDVar(Recipe.FactoryId = FactoryId, Recipe.TargetMaterials \ni MaterialId, Date = Date)} + \\
+ \sum_{x, WarehouseId = склад разгрузки}{MaterialMovementDVar(SourceFactoryId = x, DestinationFactoryId = FactoryId, MaterialId = MaterialId, ArrivalDate = Date) * TransportationLoss(FactoryId = x, MaterialId = MaterialId, StartDate \leq Date \leq EndDate)} - \\
- \sum_{Recipe, WarehouseId = основной склад}{RecipeProductionDVar(Recipe.FactoryId = FactoryId, Recipe.SourceMaterials \ni MaterialId, Date = Date) * Recipe.TransformationCoefficient} -\\
- \sum_{x, WarehouseId = основной склад}{MaterialMovementDVar(SourceFactoryId = FactoryId, DestinationFactoryId = x, MaterialId = MaterialId, DepartureDate = Date)} -\\
- \sum_{x}{FactoryWarehouseMovementDVar(FactoryId = FactoryId, SourceWarehouseId = WarehouseId, DestinationWarehouseId = x, MaterialId = MaterialId, Date = Date)} - \\
- ThirdPartyRequirementDVar(FactoryId = FactoryId, MaterialId = MaterialId, Date = Date)(WarehouseId == основной склад) -\\
- FactoryMaterialNormativeValueDVar(FactoryId = FactoryID, MaterialId = MaterialId, Date = Date.Next) - \\
- FactoryMaterialValueDVar(FactoryId = FactoryID, MaterialId = MaterialId, Date = Date.Next) $$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[numeric/continues, тысячи тонн\]

* LowerBound - минимальное значение функционала \[double, тысячи тонн\]

  * = -(StockIncomeConst.Value \+ InnerSupplyConst(WarehouseId = основной склад).Value - SaleRequirementConst(WarehouseId = основной склад).Value);

* UpperBound - максимальное значение функционала \[double, тысячи тонн\]

  * = -(StockIncomeConst.Value \+ InnerSupplyConst(WarehouseId = основной склад).Value - SaleRequirementConst(WarehouseId = основной склад).Value);

#### **Источники** {#istochniki}

Создаётся по всем [FactoryMaterialValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#factorymaterialvaluedvar).

## **FactoryWarehouseMaxVolumeConstraint \[{yellow}(WIP)\]** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, описывающее совокупный расход ёмкости склада завода.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор завода \[{yellow}(int)\] (Primary key);

* WarehouseId - идентификатор склада завода \[int\] (Primary key);

* Date - управляемый момент времени \[DateTime\] (Primary key);

#### **Функционал** {#atributy}

$$\sum_{x}{FactoryMaterialValueDVar(FactoryId = FactoryId, MaterialID = x, Date = Date)}
$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[numeric/continues, тысячи тонн\]

* LowerBound - минимальное значение функционала \[double, тысячи тонн\]

  * = 0;

* UpperBound - максимальное значение функционала \[double, тысячи тонн\]

  * = [FactoryWarehouseMaxVolume](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factorywarehousemaxvolume-mesyac-po-dnyam).MaxVolume;

#### **Источники** {#istochniki}

Создаётся по всем заводам и материалам, для которых заданы [FactoryWarehouseMaxVolume](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factorywarehousemaxvolume-mesyac-po-dnyam).

## OuterSupplyMaxVolumeByYearConstraint {#outersupply}

#### **Описание** {#opisanie}

Ограничение, описывающее совокупную закупку материалов у поставщика.

#### **Атрибуты** {#atributy}

* SupplierId - идентификатор поставщика \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

#### **Функционал** {#atributy}

$$\sum_{x, y}{OuterSupplyDVar(SupplierId = SupplierId, MaterialID = MaterialId, DestinationFactoryId = x, DepartureDate = y)}
$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[numeric/continues, тысячи тонн\]

* LowerBound - минимальное значение функционала \[double, тысячи тонн\]

  * = 0;

* UpperBound - максимальное значение функционала \[double, тысячи тонн\]

  * = [OuterSupplyMaxVolumeByYear](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#outersupplymaxvolumebyyear).UpperLimit;

#### **Источники** {#istochniki}

Создаётся по всем поставщикам и материалам, для которых заданы [OuterSupplyMaxVolumeByYear](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#outersupplymaxvolumebyyear).

## SupplyPartyConstraint {#outersupply}

#### **Описание** {#opisanie}

Ограничения, описывающее соблюдение партии поставки поставщика.

#### **Атрибуты** {#atributy}

* SupplierId - идентификатор поставщика \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода поставки \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* DepartureDate - дата отгрузки материала \[DateTime\] (Primary key);

  * на годичном горизонте раз в месяц;

  * на месячном произвольно по дням;

* ArrivalDate - дата прибытия на завод отгрузки \[DateTime\];

  * = DepartureDate.AddDays([SupplyRoute](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#supplyroute).LeadTime);

* LowerLimit - минимальный объём поставки \[double, тысячи тонн / месяц\];

* UpperLimit - максимальный объём поставки \[double, тысячи тонн / месяц\];

* SupplyParty - партия поставки \[double, тысячи тонн / сутки\];

* ValueDVar - ограничиваемая переменная внешней поставки \[OuterSupplyDVar\];

* IndicatorDVar - индикаторная переменная, соответствующая ValueDVar \[SupplyMinPartyIndicatorDVar\];

* IncrementDVar - переменная количества партий поставки, соответствующая ValueDVar \[SupplyMinPartyIncrementDVar\];

#### **Функционалы** {#atributy}

$$ValueDVar.Value - UpperLimit * IndicatorDVar.Value \leq 0\\
IndicatorDVar.Value * LowerLimit - ValueDvar.Value \leq 0\\
IncrementDVar.Value * SupplyParty - ValueDVar.Value = 0$$

#### **Источники** {#istochniki}

Создаётся по всем поставщикам и материалам, для которых SupplyParty и LowerLimit не равны нулю.

## ShippingByMonthConstraint \[{blue}(Месяц по дням)\] {#outersupply}

#### **Описание** {#opisanie}

Ограничение, описывающее совокупную отгрузку материала с завода.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор завода-отправителя \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* Month - дата начала месяца ограничения \[DateTime\] (Primary key);

#### **Функционал** {#atributy}

$$\sum_{x, DepartureDate}{MaterialMovementDVar(SourceFactoryId = FactoryId, MaterialID = MaterialId, DestinationFactoryId = x, Month \leq DepartureDate \leq Month.AddMonth(1))}
$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[numeric/continues, тысячи тонн\]

* LowerBound - минимальное значение функционала \[double, тысячи тонн\]

  * = 0;

* UpperBound - максимальное значение функционала \[double, тысячи тонн\]

  * = [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply).UpperLimit;

#### **Источники** {#istochniki}

Создаётся по всем заводам и материалам, для которых заданы ненулевые лимиты в [InnerSupply](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#innersupply).

## UnloadingConstraint **\[{blue}(Годовое планирование, скользящее окно)\]** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, описывающее совокупную разгрузку материала на заводе в сутки.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор завода приёмки \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор поставляемого материала \[int\] (Primary key);

* SourceId - идентификатор поставщика материала \[int\] (Primary key);

* IsExternal - признак внешнего поставщика \[int\] (Primary key);

* Date - дата ограничения \[DateTime\] (Primary key);

  * на годичном горизонте раз в месяц;

  * на месячном горизонте раз в сутки;

* UnloadLimit - максимальная выгрузка \[double, тысячи тонн\];

  * = [FactoryUnloadLimit](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factoryunloadlimit).MaxUnloadingVolume \[double, тысячи тонн / сутки, {blue}(месяц по дням)\];

  * = (Date.AddMonth(1) - Date).Days \* [FactoryUnloadLimit](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factoryunloadlimit).MaxUnloadingVolume \[double, тысячи тонн / месяц, {blue}(год)\];

#### **Функционал** {#atributy}

$$MaterialMovementDVar(SourceFactoryId = SourceId, MaterialId = MaterialId, DestinationFactoryId = FactoryId, ArrivalDate = Date) +\\
+ OuterSupplyDVar(SupplierId = SourceId, MaterialId = MaterialId, DestinationFactoryId = FactoryId, ArrivalDate = Date)$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[numeric/continues, тысячи тонн\]

* LowerBound - минимальное значение функционала \[double, тысячи тонн\]

  * = 0;

* UpperBound - максимальное значение функционала \[double, тысячи тонн\]

  * = [FactoryUnloadLimit](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factoryunloadlimit).MaxUnloadingVolume;

#### **Источники** {#istochniki}

Создаётся по всем заводам и материалам, для которых заданы ненулевые лимиты в [FactoryUnloadLimit](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#factoryunloadlimit).

## MaterialMovementPartyConstraint {#outersupply}

#### **Описание** {#opisanie}

Ограничения, описывающее соблюдение партии перемещения материалов между заводами.

#### **Атрибуты** {#atributy}

* SourceFactoryId - идентификатор завода отгрузки \[int\] (Primary key);

* DestinationFactoryId - идентификатор завода приёмки \[int\] (Primary key);

* MaterialId - идентификатор перевозимого материала \[int\] (Primary key);

* VehicleType - идентификатор типа транспортного средства (Primary key) \[{blue}(месяц по дням)\];

* Month - дата начала месяца \[DateTime\] (Primary key);

* LowerLimit - минимальный объём поставки \[double, тысячи тонн / месяц\];

* UpperLimit - максимальный объём поставки \[double, тысячи тонн / месяц\];

* SupplyParty - партия поставки \[double, тысячи тонн / сутки\];

* ValueDVars - ограничиваемые переменные перемещения внутри месяца Month \[MaterialMovementDVar\];

* IndicatorDVar - индикаторная переменная, соответствующая ValueDVar \[MaterialMovementMinPartyIndicatorDVar\];

* IncrementDVars- переменные количества партий поставки, соответствующие ValueDVars \[MaterialMovementMinPartyIncrementDVar\];

#### **Функционалы** {#atributy}

$$\sum_{ValueDVar \in ValueDVars}{ValueDVar.Value - UpperLimit * IndicatorDVar.Value} \leq 0\\
IndicatorDVar.Value * LowerLimit - \sum_{ValueDVar \in ValueDVars}{ValueDvar.Value} \leq 0\\
IncrementDVar.Value * SupplyParty - ValueDVar.Value = 0, \forall (ValueDVar, IncrementDVar)$$

#### **Источники** {#istochniki}

Создаётся по всем заводам и материалам, для которых SupplyParty и LowerLimit не равны нулю.

## **NormativeConsumptionConstraint \[{yellow}(WIP, possible obsolete)\]** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, описывающее нормативное потребление материалов при производстве.

#### **Атрибуты** {#atributy}

* FactoryId - идентификатор завода \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор материала \[int\] (Primary key);

* SourceId - идентификатор поставщика материала \[int, nullable\] (Primary key);

* IsExternal - признак внешнего поставщика \[bool\];

* Date - управляемый момент времени \[DateTime\] (Primary key);

#### **Функционал** {#atributy}

$$\sum_{x \leq Date}{OuterSupplyDVar(SupplierId = SourceId, MaterialID = MaterialId, DestinationFactoryId = FactoryId, ArrivalDate = x)} +\\
+ \sum_{x \leq Date}{MaterialMovementDVar(SourceFactoryId = SourceId, DestinationFactoryId = FactoryId, MaterialId = MaterialId, ArrivalDate = x) * TransportationLoss(FactoryId = SourceId, MaterialId = MaterialId, StartDate \leq x \leq EndDate)} +\\
+ \sum_{x \leq Date}{StockIncomeConst(FactoryId = FactoryId, MaterialId = MaterialId, SourceId = SourceId, AvaliableDate = x)} -\\
- \sum_{Recipe, x \leq Date}{RecipeProductionDVar(Recipe.FactoryId = FactoryId, Recipe.SourceMaterials \ni MaterialId, Date = x) * ProductionRecipe(ProducerId = Recipe.ProducerId, StartDate \leq x \leq EndDate, SourceId = SourceId, SourceMaterialId = MaterialId).TransformationCoefficient}$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[numeric/continues, тысячи тонн\]

* LowerBound - минимальное значение функционала \[double, тысячи тонн\]

  * = 0;

* UpperBound - максимальное значение функционала \[double, тысячи тонн\]

  * = INF;

#### **Источники** {#istochniki}

Создаётся по всем [ProductionRecipe](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#productionrecipe), у которых зада источник появления сырья.

## **ProductionPowerConstraint** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, описывающее производственные мощности агрегатов.

#### **Атрибуты** {#atributy}

* ProducerId - идентификатор завода \[{yellow}(int)\] (Primary key);

* MaterialId - идентификатор материала \[int\] (Primary key);

* Date - управляемый момент времени \[DateTime\] (Primary key);

* DowntimeDVars - все ремонты, влияющие на производительность в управляемый момент времени \[DowntimeDVar\];

  * DowntimeDVar \| DowntimeDVar.StartDate \+ MIN(ProductivityTemplate(TemplateId = DowntimeDVar.TemplateId).Shift) \<=  Date

  * && Date \<=DowntimeDVar.StartDate \+ MAX(ProductivityTemplate(TemplateId = DowntimeDVar.TemplateId).Shift);

* MaxProductivity - максимальная производительность без простоев \[double, тысячи тонн / сутки\];

  * Productivity(ProducerId = ProducerId, MaterialId = MaterialId, StartDate \<= Date \<= EndDate).MaxVolume;

* MinProductivity - минимальная производительность без простоев \[double, тысячи тонн / сутки\];

  * Productivity(ProducerId = ProducerId, MaterialId = MaterialId, StartDate \<= Date \<= EndDate).MinVolume;

* MaxProductivitiesByDowntime - информация о максимальной производительности (тысячи тонн / сутки) агрегата в зависимости от типа ремонта;

  * = MIN(

    * MaxProductivity

    * ProductivityTemplate(ProducerId = ProducerId, MaterialId = MaterialId, StartDate \<= Downtime.StartDate \<= EndDate, TemplateId = DowntimeDVar.TemplateId).Volume, если есть

  * ) \* (

    * DowntimeProductivityInfo(ProducerId = ProducerId, DowntimeType = Downtime.DowntimeType, Shift = Date - DowntimeDVar.StartDate).ProductivityCoefficient, если есть

    * иначе 1)

* MinProductivitiesByDowntime - информация о минимальной производительности (тысячи тонн / сутки) агрегата в зависимости от типа ремонта;

  * = MAX(

    * MinProductivity

    * ProductivityTemplate(ProducerId = ProducerId, MaterialId = MaterialId, StartDate \<= Downtime.StartDate \<= EndDate, TemplateId = DowntimeDVar.TemplateId).Volume, если есть

  * ) \* (

    * DowntimeProductivityInfo(ProducerId = ProducerId, DowntimeType = Downtime.DowntimeType, Shift = Date - DowntimeDVar.StartDate).ProductivityCoefficient, если есть

    * иначе 1)

#### **Функционал (max)** {#atributy}

$$RecipeProductionDVar(Recipe.FactoryId = FactoryId, Recipe.TargetMaterials \ni MaterialId, Date = Date) -\\
- \sum_{DowntimeDVar \in DowntimeDVars}{DowntimeDVar * MaxProductivitiesByDowntime(DowntimeDVar)} - \\
- (1 - \sum_{DowntimeDVar \in DowntimeDVars}{DowntimeDVar}) * MaxProductivity \leq 0,\\
$$

#### **Функционал (min)** {#atributy}

$$RecipeProductionDVar(Recipe.FactoryId = FactoryId, Recipe.TargetMaterials \ni MaterialId, Date = Date) -\\
- \sum_{DowntimeDvar \in DowntimeDVars}{DowntimeDVar * MinProductivitiesByDowntime(DowntimeDVar)} -\\
- (1 - \sum_{DowntimeDVar \in DowntimeDVars}{DowntimeDVar}) * MinProductivity \geq 0,\\$$

#### **Источники** {#istochniki}

Создаётся по всем [ProductionRecipe](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#productionrecipe).

## **DowntimeSingularityConstraint** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, определяющая единственность даты начала фиксированного ремонта.

#### **Атрибуты** {#atributy}

* SpecificDowntimeId - идентификатор конкретного ремонта \[int\] (Primary key);

#### **Функционал** {#atributy}

$$\sum_{DowntimeDVar | DowntimeDVar.SpecificDowntimeId = SpecificDowntimeId}{DowntimeDVar}
$$

$$$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = 0;

* UpperBound - максимальное значение функционала \[int\]

  * = 1;

#### **Источники** {#istochniki}

Создаётся по всем [DowntimeDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#downtimedvar).

## **DowntimeSequenceConstraint** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, фиксирующее последовательность ремонтных работ внутри одной очереди на конкретном производственном агрегате.

#### **Атрибуты** {#atributy}

* ProducerId - идентификатор ремонтируемой производственной единицы \[int\] (Primary key);
* SpecificDowntimeId - идентификатор конкретных ремонтных работ \[int\] (Primary key);
* DowntimeQueueId - идентификатор очереди ремонтных работ \[int\] (Primary key);
  * 1 \<=\> DowntimeType == ППР;

  * 0 иначе;
* ProducerDowntimeStartDate - дата, меньшая, чем любая возможная дата начала управляемого ремонта фиксированного агрегата \[DateTime\];

#### **Функционал** {#atributy}

$$\sum_{StartDate}{DowntimeDVar(DowntimeQueueId = DowntimeQueueId, SpecificDowntimeId = SpecificDowntimeId) * (StartDate - ProducerDowntimeStartDate)} - \\
- \sum_{StartDate}{DowntimeDVar(DowntimeQueueId = DowntimeQueueId, SpecificDowntimeId = SpecificDowntimeId.Next) * (StartDate - ProducerDowntimeStartDate)}$$

$$$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = -INF;

* UpperBound - максимальное значение функционала \[int\]

  * = 0;

#### **Источники** {#istochniki}

Создаётся по всем уникальным парам (ProducerId, DowntimeQueueId) из коллекции [DowntimeDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#downtimedvar).

## **DowntimeDeltaConstraint** {#outersupply}

#### **Описание** {#opisanie}

Ограничение, фиксирующее допустимые окна между ремонтными работами разных типов на конкретном производственном агрегате.

#### **Атрибуты** {#atributy}

* ProducerId - идентификатор ремонтируемой производственной единицы \[int\] (Primary key);
* SpecificDowntimeId - идентификатор конкретных ремонтных работ \[int\] (Primary key);
* DowntimeQueueId - идентификатор очереди ремонтных работ \[int\];
  * 1 \<=\> DowntimeType == ППР;

  * 0 иначе;
* ProducerDowntimeStartDate - дата, меньшая, чем любая возможная дата начала управляемого ремонта фиксированного агрегата \[DateTime\];

#### **Функционал (интервалы в одной очереди)** {#atributy}

$$\sum_{StartDate}{DowntimeDVar(SpecificDowntimeId = SpecificDowntimeId) * (StartDate - ProducerDowntimeStartDate)} - \\
- \sum_{StartDate}{DowntimeDVar(DowntimeQueueId = DowntimeQueueId, SpecificDowntimeId = SpecificDowntimeId.Next) * (StartDate - ProducerDowntimeStartDate)}$$

$$$$

#### **Домен (интервалы в одной очереди)** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = -DowntimeDeltaInfo(ProducerId = ProducerId, PreviousDowntimeType = DowntimeDVar(SpecificDowntimeId).DowntimeType, NextDowntimeType = DowntimeDVar(SpecificDowntimeId.Next).DowntimeType).MaxDaysDelta;

* UpperBound - максимальное значение функционала \[int\]

  * = -DowntimeDeltaInfo(ProducerId = ProducerId, PreviousDowntimeType = DowntimeDVar(SpecificDowntimeId).DowntimeType, NextDowntimeType = DowntimeDVar(SpecificDowntimeId.Next).DowntimeType).MinDaysDelta;

#### **Функционалы (интервалы между разными очередями, создаются только для DowntimeQueueId = 0)** {#atributy}

$$\sum_{StartDate}{DowntimeDVar(SpecificDowntimeId = SpecificDowntimeId) * (StartDate - ProducerDowntimeStartDate)} - \\
- \sum_{StartDate}{DowntimeDVar(SpecificDowntimeId = AltDowntimeId) * (StartDate - ProducerDowntimeStartDate)}, \\
\forall AltDowntimeId | DowntimeDvar(AltDowntimeId).DowntimeQueueId = 1$$

$$$$

#### **Домены (интервалы между разными очередями)** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = -DowntimeDeltaInfo(ProducerId = ProducerId, PreviousDowntimeType = DowntimeDVar(SpecificDowntimeId).DowntimeType, NextDowntimeType = DowntimeDVar(AltDowntimeId.Next).DowntimeType).MaxDaysDelta;

* UpperBound - максимальное значение функционала \[int\]

  * = -DowntimeDeltaInfo(ProducerId = ProducerId, PreviousDowntimeType = DowntimeDVar(SpecificDowntimeId).DowntimeType, NextDowntimeType = DowntimeDVar(AltDowntimeId.Next).DowntimeType).MinDaysDelta;

#### **Источники** {#istochniki}

Создаётся по всем уникальным SpecificDowntimeId из коллекции [DowntimeDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#downtimedvar).

# Целевые функции

Задача формулируется как задача многокритериальной оптимизации с приоритизированными целевыми функциями, т.е. оптимизация происходит последовательно, с фиксацией достигнутого результата на конкретной целевой функции как ограничения. Каждая целевая функция характеризует соответствующий этап работы оптимизатора.

## **MaterialProductionVolumeMaximisationObjective** {#outersupply}

#### **Описание** {#opisanie}

Целевая функция максимизации объёма выпуска материалов.

#### **Атрибуты** {#atributy}

* MaterialId - идентификатор конкретного вида материала \[int\] (Primary key);

#### **Функционал** {#atributy}

$$\sum_{RecipeProductionDVar | RecipeProductionDVar.Recipe.TargetMaterials \ni MaterialId}{RecipeProductionDVar ProductionRecipe(StartDate \leq RecipeProductionDVar.Date \leq EndDate, ProducerId = RecipeProductionDVar.Recipe.ProducerId, TargetMaterialId = TargetMaterialId).TargetPartition}
$$

$$$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = 0;

* UpperBound - максимальное значение функционала \[int\]

  * = INF;

#### **Источники** {#istochniki}

Создаётся по всем [MaterialProductionMaximisation](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#materialproductionmaximisation).

## **VehicleTypePriorityMaximisationObjective \[{yellow}(WIP,)** {blue}(месяц по дням)**\]** {#outersupply}

#### **Описание** {#opisanie}

Целевая функция максимизации приоритетов используемых транспортных средств.

#### **Атрибуты** {#atributy}

* Не требуются;

#### **Функционал** {#atributy}

$$\sum_{OuterSupplyDVar | OuterSupplyDVar.IsPrioritised}{OuterSupplyDVar * OuterSupplyDVar.Priority} +\\
+\sum_{MaterialMovementDVar | MaterialMovementDVar.IsPrioritised}{MaterialMovementDVar * MaterialMovementDVar.Priority}$$

$$$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = 0;

* UpperBound - максимальное значение функционала \[int\]

  * = INF;

#### **Источники** {#istochniki}

Создаётся по всем [SourceMaterialPriority](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#sourcematerialpriority).

## **MaterialPriorityMaximisationObjective \[{yellow}(WIP)\]** {#outersupply}

#### **Описание** {#opisanie}

Целевая функция максимизации приоритетов потребления материалов.

#### **Атрибуты** {#atributy}

* Не требуются;

#### **Функционал** {#atributy}

$$\sum_{(ProducerId, SourceMaterialId) \in SourceMaterialPriority, Date}{RecipeProductionDVar(Date = Date, Recipe.ProducerId = ProducerId, Recipe.SourceMaterials \ni SourceMaterialId) SourceMaterialPriority(ProducerId = RecipeProductionDvar.Recipe.ProducerId)}
$$

$$$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = 0;

* UpperBound - максимальное значение функционала \[int\]

  * = INF;

#### **Источники** {#istochniki}

Создаётся по всем [SourceMaterialPriority](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/sushhnosti-modeli-dannyx/#sourcematerialpriority).

## **NormativeStockLevelMaximisationObjective \[{yellow}(WIP)\]** {#outersupply}

#### **Описание** {#opisanie}

Целевая функция максимизации переходящего нормативного остатка. В рамках этого этапа создаются переменные [FactoryMaterialNormativeValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#factorymaterialnormativevaluedvar), дублирующие переменные переходящего остатка [FactoryMaterialValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#factorymaterialvaluedvar).

#### **Атрибуты** {#atributy}

* Не требуются;

#### **Функционал** {#atributy}

$$\sum_{FactoryMaterialNormativeValueDVar}{FactoryMaterialNormativeValueDVar}
$$

$$$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = 0;

* UpperBound - максимальное значение функционала \[int\]

  * = INF;

#### **Источники** {#istochniki}

Создаётся по всем [FactoryMaterialNormativeValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#factorymaterialnormativevaluedvar).

## **TransformationsMinimisationObjective \[{yellow}(WIP)\]** {#outersupply}

#### **Описание** {#opisanie}

Целевая функция минимизации висящих не под потребность остатков.

#### **Атрибуты** {#atributy}

* Не требуются;

#### **Функционал** {#atributy}

$$\sum_{FactoryMaterialValueDVar}{FactoryMaterialValueDVar}
$$

$$$$

#### **Домен** {#atributy}

* Value - значение функционала ограничения \[int\]

* LowerBound - минимальное значение функционала \[int\]

  * = 0;

* UpperBound - максимальное значение функционала \[int\]

  * = INF;

#### **Источники** {#istochniki}

Создаётся по всем [FactoryMaterialValueDVar](https://wiki.yandex.ru/produktovoe-napravlenie/data-science--optimization/proekty/nlmk/matematicheskaja-model-dannyx/#factorymaterialvaluedvar).
