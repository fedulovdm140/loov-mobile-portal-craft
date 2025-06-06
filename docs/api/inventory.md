
# API инвентаризации

## Получение остатков товара

```
GET /api/method/erpnext.stock.utils.get_stock_balance?item_code=FRAME-001&warehouse=Main Store
Authorization: token api_key:api_secret
```

## Получение остатков всех товаров

```
GET /api/resource/Bin?fields=["item_code","warehouse","actual_qty","projected_qty"]&filters=[["warehouse","=","Main Store"]]
Authorization: token api_key:api_secret
```

## Поступление товара

```
POST /api/resource/Stock Entry
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "stock_entry_type": "Material Receipt",
  "items": [
    {
      "item_code": "FRAME-001",
      "qty": 10,
      "basic_rate": 15000,
      "t_warehouse": "Main Store"
    }
  ]
}
```

## Перемещение товара между складами

```
POST /api/resource/Stock Entry
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "stock_entry_type": "Material Transfer",
  "items": [
    {
      "item_code": "FRAME-001",
      "qty": 5,
      "s_warehouse": "Main Store",
      "t_warehouse": "Display Store"
    }
  ]
}
```

## Списание товара

```
POST /api/resource/Stock Entry
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "stock_entry_type": "Material Issue",
  "items": [
    {
      "item_code": "FRAME-001",
      "qty": 1,
      "basic_rate": 15000,
      "s_warehouse": "Main Store"
    }
  ]
}
```

## Получение истории движения товара

```
GET /api/resource/Stock Ledger Entry?filters=[["item_code","=","FRAME-001"]]&order_by="posting_date desc"&fields=["posting_date","voucher_type","voucher_no","actual_qty","qty_after_transaction"]
Authorization: token api_key:api_secret
```

## Инвентаризация

```
POST /api/resource/Stock Reconciliation
Content-Type: application/json
Authorization: token api_key:api_secret

{
  "purpose": "Stock Reconciliation",
  "items": [
    {
      "item_code": "FRAME-001",
      "warehouse": "Main Store",
      "qty": 15,
      "valuation_rate": 15000
    }
  ]
}
```
