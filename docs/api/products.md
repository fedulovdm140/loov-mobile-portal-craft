
# API управления товарами

## Получение товаров (оправы)

```
GET /api/resource/Item?filters=[["item_group","=","Frames"]]&fields=["name","item_name","item_code","standard_rate","stock_qty"]
Authorization: token api_key:api_secret
```

## Создание товара

```
POST /api/resource/Item
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "item_code": "FRAME-001",
  "item_name": "Оправа Ray-Ban RB5150",
  "item_group": "Frames",
  "stock_uom": "Nos",
  "is_stock_item": 1,
  "include_item_in_manufacturing": 0,
  "standard_rate": 15000,
  "custom_brand": "Ray-Ban",
  "custom_model": "RB5150",
  "custom_color": "Черный",
  "custom_size": "52-19-140"
}
```

## Поиск товаров

```
GET /api/resource/Item?filters=[["item_name","like","%Ray-Ban%"]]
Authorization: token api_key:api_secret
```

## Получение товаров по категории

```
GET /api/resource/Item?filters=[["item_group","in",["Frames","Lenses","Accessories"]]]
Authorization: token api_key:api_secret
```

## Обновление цены товара

```
PUT /api/resource/Item/{item_code}
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "standard_rate": 16000
}
```

## Кастомные поля товара

Рекомендуемые кастомные поля для товаров оптики:

- `custom_brand` (Data) - Бренд
- `custom_model` (Data) - Модель
- `custom_color` (Data) - Цвет
- `custom_size` (Data) - Размер
- `custom_material` (Data) - Материал
- `custom_lens_type` (Select) - Тип линз
- `custom_prescription_required` (Check) - Требуется рецепт
