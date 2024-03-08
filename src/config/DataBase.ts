const db = {
    "entities": [
        {
            "EntityId": "1",
            "EntityName": "Customer",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "2",
            "EntityName": "Order",
            "RelatedEntityId": "1"
        },
        {
            "EntityId": "3",
            "EntityName": "Product",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "4",
            "EntityName": "Invoice",
            "RelatedEntityId": "2"
        },
        {
            "EntityId": "5",
            "EntityName": "Address",
            "RelatedEntityId": "1"
        },
        {
            "EntityId": "6",
            "EntityName": "Payment",
            "RelatedEntityId": "4"
        },
        {
            "EntityId": "7",
            "EntityName": "Review",
            "RelatedEntityId": "3"
        },
        {
            "EntityId": "8",
            "EntityName": "Employee",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "9",
            "EntityName": "Department",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "10",
            "EntityName": "Task",
            "RelatedEntityId": "8"
        },
        {
            "EntityId": "11",
            "EntityName": "Supplier",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "12",
            "EntityName": "Shipment",
            "RelatedEntityId": "11"
        },
        {
            "EntityId": "13",
            "EntityName": "Inventory",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "14",
            "EntityName": "Transaction",
            "RelatedEntityId": "13"
        },
        {
            "EntityId": "15",
            "EntityName": "Category",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "16",
            "EntityName": "Service",
            "RelatedEntityId": "15"
        },
        {
            "EntityId": "17",
            "EntityName": "Feedback",
            "RelatedEntityId": "7"
        },
        {
            "EntityId": "18",
            "EntityName": "Contract",
            "RelatedEntityId": "9"
        },
        {
            "EntityId": "19",
            "EntityName": "Expense",
            "RelatedEntityId": "18"
        },
        {
            "EntityId": "20",
            "EntityName": "Advertisement",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "21",
            "EntityName": "Message",
            "RelatedEntityId": "20"
        },
        {
            "EntityId": "22",
            "EntityName": "Notification",
            "RelatedEntityId": "20"
        },
        {
            "EntityId": "23",
            "EntityName": "Event",
            "RelatedEntityId": "22"
        },
        {
            "EntityId": "24",
            "EntityName": "Subscription",
            "RelatedEntityId": "22"
        },
        {
            "EntityId": "25",
            "EntityName": "Ticket",
            "RelatedEntityId": "23"
        },
        {
            "EntityId": "26",
            "EntityName": "Training",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "27",
            "EntityName": "Course",
            "RelatedEntityId": "26"
        },
        {
            "EntityId": "28",
            "EntityName": "Exam",
            "RelatedEntityId": "26"
        },
        {
            "EntityId": "29",
            "EntityName": "Result",
            "RelatedEntityId": "28"
        },
        {
            "EntityId": "30",
            "EntityName": "Library",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "31",
            "EntityName": "Book",
            "RelatedEntityId": "30"
        },
        {
            "EntityId": "32",
            "EntityName": "Journal",
            "RelatedEntityId": "30"
        },
        {
            "EntityId": "33",
            "EntityName": "Author",
            "RelatedEntityId": "31"
        },
        {
            "EntityId": "34",
            "EntityName": "Publisher",
            "RelatedEntityId": "32"
        },
        {
            "EntityId": "35",
            "EntityName": "Membership",
            "RelatedEntityId": "34"
        },
        {
            "EntityId": "36",
            "EntityName": "Issue",
            "RelatedEntityId": "31"
        },
        {
            "EntityId": "37",
            "EntityName": "Return",
            "RelatedEntityId": "36"
        },
        {
            "EntityId": "38",
            "EntityName": "Fine",
            "RelatedEntityId": "36"
        },
        {
            "EntityId": "39",
            "EntityName": "Gallery",
            "RelatedEntityId": "NULL"
        },
        {
            "EntityId": "40",
            "EntityName": "Exhibition",
            "RelatedEntityId": "39"
        },
        {
            "EntityId": "41",
            "EntityName": "Artwork",
            "RelatedEntityId": "39"
        },
        {
            "EntityId": "42",
            "EntityName": "Artist",
            "RelatedEntityId": "41"
        },
        {
            "EntityId": "43",
            "EntityName": "Visitor",
            "RelatedEntityId": "40"
        },
        {
            "EntityId": "44",
            "EntityName": "Venue",
            "RelatedEntityId": "40"
        },
        {
            "EntityId": "45",
            "EntityName": "Registration",
            "RelatedEntityId": "43"
        },
        {
            "EntityId": "46",
            "EntityName": "Catalog",
            "RelatedEntityId": "41"
        },
        {
            "EntityId": "47",
            "EntityName": "Curator",
            "RelatedEntityId": "46"
        },
        {
            "EntityId": "48",
            "EntityName": "Sponsor",
            "RelatedEntityId": "40"
        },
        {
            "EntityId": "49",
            "EntityName": "Volunteer",
            "RelatedEntityId": "39"
        },
        {
            "EntityId": "50",
            "EntityName": "Participant",
            "RelatedEntityId": "49"
        }
    ]

    ,

    "entityrelations": [
        {
            "RelationId": "1",
            "EntityId": "2",
            "RelatedEntityId": "1"
        },
        {
            "RelationId": "2",
            "EntityId": "4",
            "RelatedEntityId": "1"
        },
        {
            "RelationId": "3",
            "EntityId": "4",
            "RelatedEntityId": "2"
        },
        {
            "RelationId": "4",
            "EntityId": "5",
            "RelatedEntityId": "1"
        },
        {
            "RelationId": "5",
            "EntityId": "6",
            "RelatedEntityId": "4"
        },
        {
            "RelationId": "6",
            "EntityId": "7",
            "RelatedEntityId": "3"
        },
        {
            "RelationId": "7",
            "EntityId": "17",
            "RelatedEntityId": "3"
        },
        {
            "RelationId": "8",
            "EntityId": "18",
            "RelatedEntityId": "9"
        },
        {
            "RelationId": "9",
            "EntityId": "19",
            "RelatedEntityId": "18"
        },
        {
            "RelationId": "10",
            "EntityId": "21",
            "RelatedEntityId": "20"
        },
        {
            "RelationId": "11",
            "EntityId": "22",
            "RelatedEntityId": "20"
        },
        {
            "RelationId": "12",
            "EntityId": "23",
            "RelatedEntityId": "22"
        },
        {
            "RelationId": "13",
            "EntityId": "24",
            "RelatedEntityId": "22"
        },
        {
            "RelationId": "14",
            "EntityId": "25",
            "RelatedEntityId": "23"
        },
        {
            "RelationId": "15",
            "EntityId": "29",
            "RelatedEntityId": "39"
        },
        {
            "RelationId": "16",
            "EntityId": "30",
            "RelatedEntityId": "31"
        },
        {
            "RelationId": "17",
            "EntityId": "31",
            "RelatedEntityId": "30"
        },
        {
            "RelationId": "18",
            "EntityId": "33",
            "RelatedEntityId": "31"
        },
        {
            "RelationId": "19",
            "EntityId": "34",
            "RelatedEntityId": "32"
        },
        {
            "RelationId": "20",
            "EntityId": "35",
            "RelatedEntityId": "34"
        },
        {
            "RelationId": "21",
            "EntityId": "36",
            "RelatedEntityId": "31"
        },
        {
            "RelationId": "22",
            "EntityId": "37",
            "RelatedEntityId": "36"
        },
        {
            "RelationId": "23",
            "EntityId": "38",
            "RelatedEntityId": "36"
        },
        {
            "RelationId": "24",
            "EntityId": "40",
            "RelatedEntityId": "39"
        },
        {
            "RelationId": "25",
            "EntityId": "41",
            "RelatedEntityId": "39"
        },
        {
            "RelationId": "26",
            "EntityId": "42",
            "RelatedEntityId": "41"
        },
        {
            "RelationId": "27",
            "EntityId": "43",
            "RelatedEntityId": "40"
        },
        {
            "RelationId": "28",
            "EntityId": "44",
            "RelatedEntityId": "40"
        },
        {
            "RelationId": "29",
            "EntityId": "45",
            "RelatedEntityId": "43"
        },
        {
            "RelationId": "30",
            "EntityId": "46",
            "RelatedEntityId": "41"
        },
        {
            "RelationId": "31",
            "EntityId": "47",
            "RelatedEntityId": "46"
        },
        {
            "RelationId": "32",
            "EntityId": "48",
            "RelatedEntityId": "40"
        },
        {
            "RelationId": "33",
            "EntityId": "49",
            "RelatedEntityId": "39"
        },
        {
            "RelationId": "34",
            "EntityId": "50",
            "RelatedEntityId": "49"
        }
    ]

    ,

    "columns": 
    [
        {
            "ColumnId": "1",
            "EntityId": "1",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "2",
            "EntityId": "1",
            "ColumnName": "CustomerName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "3",
            "EntityId": "1",
            "ColumnName": "Email",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "4",
            "EntityId": "2",
            "ColumnName": "OrderId",
            "DataType": "int"
        },
        {
            "ColumnId": "5",
            "EntityId": "2",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "6",
            "EntityId": "2",
            "ColumnName": "OrderDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "7",
            "EntityId": "3",
            "ColumnName": "ProductId",
            "DataType": "int"
        },
        {
            "ColumnId": "8",
            "EntityId": "3",
            "ColumnName": "ProductName",
            "DataType": "nvarchar(250)"
        },
        {
            "ColumnId": "9",
            "EntityId": "3",
            "ColumnName": "Price",
            "DataType": "decimal(18,2)"
        },
        {
            "ColumnId": "10",
            "EntityId": "4",
            "ColumnName": "InvoiceId",
            "DataType": "int"
        },
        {
            "ColumnId": "11",
            "EntityId": "4",
            "ColumnName": "OrderId",
            "DataType": "int"
        },
        {
            "ColumnId": "12",
            "EntityId": "4",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "13",
            "EntityId": "4",
            "ColumnName": "InvoiceDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "14",
            "EntityId": "4",
            "ColumnName": "TotalAmount",
            "DataType": "decimal(18,2)"
        },
        {
            "ColumnId": "15",
            "EntityId": "5",
            "ColumnName": "AddressId",
            "DataType": "int"
        },
        {
            "ColumnId": "16",
            "EntityId": "5",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "17",
            "EntityId": "5",
            "ColumnName": "Street",
            "DataType": "nvarchar(MAX)"
        },
        {
            "ColumnId": "18",
            "EntityId": "5",
            "ColumnName": "City",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "19",
            "EntityId": "5",
            "ColumnName": "ZipCode",
            "DataType": "nvarchar(20)"
        },
        {
            "ColumnId": "20",
            "EntityId": "6",
            "ColumnName": "PaymentId",
            "DataType": "int"
        },
        {
            "ColumnId": "21",
            "EntityId": "6",
            "ColumnName": "InvoiceId",
            "DataType": "int"
        },
        {
            "ColumnId": "22",
            "EntityId": "6",
            "ColumnName": "PaymentDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "23",
            "EntityId": "6",
            "ColumnName": "Amount",
            "DataType": "decimal(6,2)"
        },
        {
            "ColumnId": "24",
            "EntityId": "6",
            "ColumnName": "PaymentMethod",
            "DataType": "nvarchar(50)"
        },
        {
            "ColumnId": "25",
            "EntityId": "7",
            "ColumnName": "ReviewId",
            "DataType": "int"
        },
        {
            "ColumnId": "26",
            "EntityId": "7",
            "ColumnName": "ProductId",
            "DataType": "int"
        },
        {
            "ColumnId": "27",
            "EntityId": "7",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "28",
            "EntityId": "7",
            "ColumnName": "Rating",
            "DataType": "int"
        },
        {
            "ColumnId": "29",
            "EntityId": "7",
            "ColumnName": "Comment",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "30",
            "EntityId": "8",
            "ColumnName": "EmployeeId",
            "DataType": "int"
        },
        {
            "ColumnId": "31",
            "EntityId": "8",
            "ColumnName": "EmployeeName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "32",
            "EntityId": "8",
            "ColumnName": "Position",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "33",
            "EntityId": "8",
            "ColumnName": "HireDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "34",
            "EntityId": "9",
            "ColumnName": "DepartmentId",
            "DataType": "int"
        },
        {
            "ColumnId": "35",
            "EntityId": "9",
            "ColumnName": "DepartmentName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "36",
            "EntityId": "9",
            "ColumnName": "Location",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "37",
            "EntityId": "10",
            "ColumnName": "TaskId",
            "DataType": "int"
        },
        {
            "ColumnId": "38",
            "EntityId": "10",
            "ColumnName": "EmployeeId",
            "DataType": "int"
        },
        {
            "ColumnId": "39",
            "EntityId": "10",
            "ColumnName": "DepartmentId",
            "DataType": "int"
        },
        {
            "ColumnId": "40",
            "EntityId": "10",
            "ColumnName": "Description",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "41",
            "EntityId": "10",
            "ColumnName": "DueDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "42",
            "EntityId": "11",
            "ColumnName": "SupplierId",
            "DataType": "int"
        },
        {
            "ColumnId": "43",
            "EntityId": "11",
            "ColumnName": "SupplierName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "44",
            "EntityId": "11",
            "ColumnName": "ContactName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "45",
            "EntityId": "11",
            "ColumnName": "Email",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "46",
            "EntityId": "11",
            "ColumnName": "Phone",
            "DataType": "nvarchar(20)"
        },
        {
            "ColumnId": "47",
            "EntityId": "12",
            "ColumnName": "ShipmentId",
            "DataType": "int"
        },
        {
            "ColumnId": "48",
            "EntityId": "12",
            "ColumnName": "OrderId",
            "DataType": "int"
        },
        {
            "ColumnId": "49",
            "EntityId": "12",
            "ColumnName": "SupplierId",
            "DataType": "int"
        },
        {
            "ColumnId": "50",
            "EntityId": "12",
            "ColumnName": "ShipmentDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "51",
            "EntityId": "13",
            "ColumnName": "InventoryId",
            "DataType": "int"
        },
        {
            "ColumnId": "52",
            "EntityId": "13",
            "ColumnName": "ProductId",
            "DataType": "int"
        },
        {
            "ColumnId": "53",
            "EntityId": "13",
            "ColumnName": "Quantity",
            "DataType": "int"
        },
        {
            "ColumnId": "54",
            "EntityId": "14",
            "ColumnName": "TransactionId",
            "DataType": "int"
        },
        {
            "ColumnId": "55",
            "EntityId": "14",
            "ColumnName": "ProductId",
            "DataType": "int"
        },
        {
            "ColumnId": "56",
            "EntityId": "14",
            "ColumnName": "Quantity",
            "DataType": "int"
        },
        {
            "ColumnId": "57",
            "EntityId": "14",
            "ColumnName": "TransactionDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "58",
            "EntityId": "15",
            "ColumnName": "CategoryId",
            "DataType": "int"
        },
        {
            "ColumnId": "59",
            "EntityId": "15",
            "ColumnName": "CategoryName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "60",
            "EntityId": "16",
            "ColumnName": "ServiceId",
            "DataType": "int"
        },
        {
            "ColumnId": "61",
            "EntityId": "16",
            "ColumnName": "ServiceName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "62",
            "EntityId": "16",
            "ColumnName": "Description",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "63",
            "EntityId": "16",
            "ColumnName": "Price",
            "DataType": "decimal(18,2)"
        },
        {
            "ColumnId": "64",
            "EntityId": "17",
            "ColumnName": "FeedbackId",
            "DataType": "int"
        },
        {
            "ColumnId": "65",
            "EntityId": "17",
            "ColumnName": "ProductId",
            "DataType": "int"
        },
        {
            "ColumnId": "66",
            "EntityId": "17",
            "ColumnName": "Comment",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "67",
            "EntityId": "18",
            "ColumnName": "ContractId",
            "DataType": "int"
        },
        {
            "ColumnId": "68",
            "EntityId": "18",
            "ColumnName": "DepartmentId",
            "DataType": "int"
        },
        {
            "ColumnId": "69",
            "EntityId": "18",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "70",
            "EntityId": "18",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "71",
            "EntityId": "19",
            "ColumnName": "ExpenseId",
            "DataType": "int"
        },
        {
            "ColumnId": "72",
            "EntityId": "19",
            "ColumnName": "ContractId",
            "DataType": "int"
        },
        {
            "ColumnId": "73",
            "EntityId": "19",
            "ColumnName": "ExpenseDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "74",
            "EntityId": "19",
            "ColumnName": "Amount",
            "DataType": "decimal(18,2)"
        },
        {
            "ColumnId": "75",
            "EntityId": "20",
            "ColumnName": "AdvertisementId",
            "DataType": "int"
        },
        {
            "ColumnId": "76",
            "EntityId": "20",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "77",
            "EntityId": "20",
            "ColumnName": "Description",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "78",
            "EntityId": "20",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "79",
            "EntityId": "20",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "80",
            "EntityId": "21",
            "ColumnName": "MessageId",
            "DataType": "int"
        },
        {
            "ColumnId": "81",
            "EntityId": "21",
            "ColumnName": "SenderId",
            "DataType": "int"
        },
        {
            "ColumnId": "82",
            "EntityId": "21",
            "ColumnName": "ReceiverId",
            "DataType": "int"
        },
        {
            "ColumnId": "83",
            "EntityId": "21",
            "ColumnName": "Content",
            "DataType": "nvarchar(1000)"
        },
        {
            "ColumnId": "84",
            "EntityId": "21",
            "ColumnName": "SendDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "85",
            "EntityId": "22",
            "ColumnName": "NotificationId",
            "DataType": "int"
        },
        {
            "ColumnId": "86",
            "EntityId": "22",
            "ColumnName": "Content",
            "DataType": "nvarchar(1000)"
        },
        {
            "ColumnId": "87",
            "EntityId": "22",
            "ColumnName": "SenderId",
            "DataType": "int"
        },
        {
            "ColumnId": "88",
            "EntityId": "22",
            "ColumnName": "ReceiverId",
            "DataType": "int"
        },
        {
            "ColumnId": "89",
            "EntityId": "22",
            "ColumnName": "SendDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "90",
            "EntityId": "23",
            "ColumnName": "EventId",
            "DataType": "int"
        },
        {
            "ColumnId": "91",
            "EntityId": "23",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "92",
            "EntityId": "23",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "93",
            "EntityId": "23",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "94",
            "EntityId": "24",
            "ColumnName": "SubscriptionId",
            "DataType": "int"
        },
        {
            "ColumnId": "95",
            "EntityId": "24",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "96",
            "EntityId": "24",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "97",
            "EntityId": "24",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "98",
            "EntityId": "25",
            "ColumnName": "TicketId",
            "DataType": "int"
        },
        {
            "ColumnId": "99",
            "EntityId": "25",
            "ColumnName": "EventId",
            "DataType": "int"
        },
        {
            "ColumnId": "100",
            "EntityId": "25",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "101",
            "EntityId": "25",
            "ColumnName": "Price",
            "DataType": "decimal(18,2)"
        },
        {
            "ColumnId": "102",
            "EntityId": "26",
            "ColumnName": "TrainingId",
            "DataType": "int"
        },
        {
            "ColumnId": "103",
            "EntityId": "26",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "104",
            "EntityId": "26",
            "ColumnName": "Description",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "105",
            "EntityId": "26",
            "ColumnName": "Trainer",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "106",
            "EntityId": "26",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "107",
            "EntityId": "26",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "108",
            "EntityId": "27",
            "ColumnName": "CourseId",
            "DataType": "int"
        },
        {
            "ColumnId": "109",
            "EntityId": "27",
            "ColumnName": "TrainingId",
            "DataType": "int"
        },
        {
            "ColumnId": "110",
            "EntityId": "27",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "111",
            "EntityId": "27",
            "ColumnName": "Description",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "112",
            "EntityId": "27",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "113",
            "EntityId": "27",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "114",
            "EntityId": "28",
            "ColumnName": "ExamId",
            "DataType": "int"
        },
        {
            "ColumnId": "115",
            "EntityId": "28",
            "ColumnName": "CourseId",
            "DataType": "int"
        },
        {
            "ColumnId": "116",
            "EntityId": "28",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "117",
            "EntityId": "28",
            "ColumnName": "Description",
            "DataType": "nvarchar(500)"
        },
        {
            "ColumnId": "118",
            "EntityId": "28",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "119",
            "EntityId": "28",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "120",
            "EntityId": "29",
            "ColumnName": "ResultId",
            "DataType": "int"
        },
        {
            "ColumnId": "121",
            "EntityId": "29",
            "ColumnName": "ExamId",
            "DataType": "int"
        },
        {
            "ColumnId": "122",
            "EntityId": "29",
            "ColumnName": "StudentId",
            "DataType": "int"
        },
        {
            "ColumnId": "123",
            "EntityId": "29",
            "ColumnName": "Score",
            "DataType": "decimal(18,2)"
        },
        {
            "ColumnId": "124",
            "EntityId": "29",
            "ColumnName": "Grade",
            "DataType": "nvarchar(10)"
        },
        {
            "ColumnId": "125",
            "EntityId": "30",
            "ColumnName": "LibraryId",
            "DataType": "int"
        },
        {
            "ColumnId": "126",
            "EntityId": "30",
            "ColumnName": "LibraryName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "127",
            "EntityId": "30",
            "ColumnName": "Location",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "128",
            "EntityId": "31",
            "ColumnName": "BookId",
            "DataType": "int"
        },
        {
            "ColumnId": "129",
            "EntityId": "31",
            "ColumnName": "LibraryId",
            "DataType": "int"
        },
        {
            "ColumnId": "130",
            "EntityId": "31",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "131",
            "EntityId": "31",
            "ColumnName": "AuthorId",
            "DataType": "int"
        },
        {
            "ColumnId": "132",
            "EntityId": "31",
            "ColumnName": "PublisherId",
            "DataType": "int"
        },
        {
            "ColumnId": "133",
            "EntityId": "32",
            "ColumnName": "JournalId",
            "DataType": "int"
        },
        {
            "ColumnId": "134",
            "EntityId": "32",
            "ColumnName": "LibraryId",
            "DataType": "int"
        },
        {
            "ColumnId": "135",
            "EntityId": "32",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "136",
            "EntityId": "32",
            "ColumnName": "PublisherId",
            "DataType": "int"
        },
        {
            "ColumnId": "137",
            "EntityId": "32",
            "ColumnName": "PublicationDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "138",
            "EntityId": "33",
            "ColumnName": "AuthorId",
            "DataType": "int"
        },
        {
            "ColumnId": "139",
            "EntityId": "33",
            "ColumnName": "AuthorName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "140",
            "EntityId": "33",
            "ColumnName": "Biography",
            "DataType": "nvarchar(1000)"
        },
        {
            "ColumnId": "141",
            "EntityId": "34",
            "ColumnName": "PublisherId",
            "DataType": "int"
        },
        {
            "ColumnId": "142",
            "EntityId": "34",
            "ColumnName": "PublisherName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "143",
            "EntityId": "34",
            "ColumnName": "Location",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "144",
            "EntityId": "35",
            "ColumnName": "MembershipId",
            "DataType": "int"
        },
        {
            "ColumnId": "145",
            "EntityId": "35",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "146",
            "EntityId": "35",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "147",
            "EntityId": "35",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "148",
            "EntityId": "36",
            "ColumnName": "IssueId",
            "DataType": "int"
        },
        {
            "ColumnId": "149",
            "EntityId": "36",
            "ColumnName": "LibraryId",
            "DataType": "int"
        },
        {
            "ColumnId": "150",
            "EntityId": "36",
            "ColumnName": "BookId",
            "DataType": "int"
        },
        {
            "ColumnId": "151",
            "EntityId": "36",
            "ColumnName": "ReturnDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "152",
            "EntityId": "37",
            "ColumnName": "ReturnId",
            "DataType": "int"
        },
        {
            "ColumnId": "153",
            "EntityId": "37",
            "ColumnName": "IssueId",
            "DataType": "int"
        },
        {
            "ColumnId": "154",
            "EntityId": "37",
            "ColumnName": "ReturnDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "155",
            "EntityId": "38",
            "ColumnName": "FineId",
            "DataType": "int"
        },
        {
            "ColumnId": "156",
            "EntityId": "38",
            "ColumnName": "CustomerId",
            "DataType": "int"
        },
        {
            "ColumnId": "157",
            "EntityId": "38",
            "ColumnName": "Amount",
            "DataType": "decimal(18,2)"
        },
        {
            "ColumnId": "158",
            "EntityId": "38",
            "ColumnName": "FineDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "159",
            "EntityId": "39",
            "ColumnName": "GalleryId",
            "DataType": "int"
        },
        {
            "ColumnId": "160",
            "EntityId": "39",
            "ColumnName": "GalleryName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "161",
            "EntityId": "39",
            "ColumnName": "Location",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "162",
            "EntityId": "40",
            "ColumnName": "ExhibitionId",
            "DataType": "int"
        },
        {
            "ColumnId": "163",
            "EntityId": "40",
            "ColumnName": "GalleryId",
            "DataType": "int"
        },
        {
            "ColumnId": "164",
            "EntityId": "40",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "165",
            "EntityId": "40",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "166",
            "EntityId": "40",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "167",
            "EntityId": "41",
            "ColumnName": "ArtworkId",
            "DataType": "int"
        },
        {
            "ColumnId": "168",
            "EntityId": "41",
            "ColumnName": "ExhibitionId",
            "DataType": "int"
        },
        {
            "ColumnId": "169",
            "EntityId": "41",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "170",
            "EntityId": "41",
            "ColumnName": "ArtistId",
            "DataType": "int"
        },
        {
            "ColumnId": "171",
            "EntityId": "41",
            "ColumnName": "Medium",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "172",
            "EntityId": "42",
            "ColumnName": "ArtistId",
            "DataType": "int"
        },
        {
            "ColumnId": "173",
            "EntityId": "42",
            "ColumnName": "ArtistName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "174",
            "EntityId": "42",
            "ColumnName": "Style",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "175",
            "EntityId": "43",
            "ColumnName": "VisitorId",
            "DataType": "int"
        },
        {
            "ColumnId": "176",
            "EntityId": "43",
            "ColumnName": "VisitorName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "177",
            "EntityId": "43",
            "ColumnName": "Email",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "178",
            "EntityId": "43",
            "ColumnName": "Phone",
            "DataType": "nvarchar(20)"
        },
        {
            "ColumnId": "179",
            "EntityId": "44",
            "ColumnName": "VenueId",
            "DataType": "int"
        },
        {
            "ColumnId": "180",
            "EntityId": "44",
            "ColumnName": "VenueName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "181",
            "EntityId": "44",
            "ColumnName": "Location",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "182",
            "EntityId": "44",
            "ColumnName": "Capacity",
            "DataType": "int"
        },
        {
            "ColumnId": "183",
            "EntityId": "45",
            "ColumnName": "RegistrationId",
            "DataType": "int"
        },
        {
            "ColumnId": "184",
            "EntityId": "45",
            "ColumnName": "ExhibitionId",
            "DataType": "int"
        },
        {
            "ColumnId": "185",
            "EntityId": "45",
            "ColumnName": "VisitorId",
            "DataType": "int"
        },
        {
            "ColumnId": "186",
            "EntityId": "45",
            "ColumnName": "RegistrationDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "187",
            "EntityId": "46",
            "ColumnName": "CatalogId",
            "DataType": "int"
        },
        {
            "ColumnId": "188",
            "EntityId": "46",
            "ColumnName": "ExhibitionId",
            "DataType": "int"
        },
        {
            "ColumnId": "189",
            "EntityId": "46",
            "ColumnName": "Title",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "190",
            "EntityId": "46",
            "ColumnName": "CatalogDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "191",
            "EntityId": "47",
            "ColumnName": "CuratorId",
            "DataType": "int"
        },
        {
            "ColumnId": "192",
            "EntityId": "47",
            "ColumnName": "CuratorName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "193",
            "EntityId": "47",
            "ColumnName": "Expertise",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "194",
            "EntityId": "48",
            "ColumnName": "SponsorId",
            "DataType": "int"
        },
        {
            "ColumnId": "195",
            "EntityId": "48",
            "ColumnName": "SponsorName",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "196",
            "EntityId": "48",
            "ColumnName": "Industry",
            "DataType": "nvarchar(100)"
        },
        {
            "ColumnId": "197",
            "EntityId": "49",
            "ColumnName": "VolunteerId",
            "DataType": "int"
        },
        {
            "ColumnId": "198",
            "EntityId": "49",
            "ColumnName": "GalleryId",
            "DataType": "int"
        },
        {
            "ColumnId": "199",
            "EntityId": "49",
            "ColumnName": "StartDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "200",
            "EntityId": "49",
            "ColumnName": "EndDate",
            "DataType": "datetime"
        },
        {
            "ColumnId": "201",
            "EntityId": "50",
            "ColumnName": "ParticipantId",
            "DataType": "int"
        },
        {
            "ColumnId": "202",
            "EntityId": "50",
            "ColumnName": "ExhibitionId",
            "DataType": "int"
        },
        {
            "ColumnId": "203",
            "EntityId": "50",
            "ColumnName": "VisitorId",
            "DataType": "int"
        },
        {
            "ColumnId": "204",
            "EntityId": "50",
            "ColumnName": "ParticipationDate",
            "DataType": "datetime"
        }
    ]
    ,

    "datatypes": [
        {
            "DataTypeId": 1,
            "DataTypeName":"int"
        },
        {
            "DataTypeId": 2,
            "DataTypeName":"decimal"
        },
        {
            "DataTypeId": 3,
            "DataTypeName":"nvarchar"
        },
        {
            "DataTypeId": 4,
            "DataTypeName":"datetime"
        },
        {
            "DataTypeId": 5,
            "DataTypeName":"bit"
        }
    ]

    ,

    "conditions": [
        {
            "ConditionId": "1",
            "ConditionName": "Equals",
            "ConditionSymbol":"==",
            "OperandCount": "1"
        },
            {
            "ConditionId": "2",
            "ConditionName": "NotEqual",
            "ConditionSymbol":"!= (<>)",
            "OperandCount": "1"
        },
        {
            "ConditionId": "3",
            "ConditionName": "GreaterThan",
            "ConditionSymbol":">",
            "OperandCount": "1"
        },
        {
            "ConditionId": "4",
            "ConditionName": "LessThan",
            "ConditionSymbol":"<",
            "OperandCount": "1"
        },
        {
            "ConditionId": "5",
            "ConditionName": "GreaterThanOrEqual",
            "ConditionSymbol":">=",
            "OperandCount": "1"
        },
        {
            "ConditionId": "6",
            "ConditionName": "NotContains",
            "ConditionSymbol":"!(%{..}%)",
            "OperandCount": "1"
        },
        {
            "ConditionId": "6",
            "ConditionName": "LessThanOrEqual",
            "ConditionSymbol":"<=",
            "OperandCount": "1"
        },
        {
            "ConditionId": "7",
            "ConditionName": "StartsWith",
            "ConditionSymbol":"{..}%",
            "OperandCount": "1"
        },
        {
            "ConditionId": "8",
            "ConditionName": "EndsWith",
            "ConditionSymbol":"%{..}",
            "OperandCount": "1"
        },
        {
            "ConditionId": "9",
            "ConditionName": "IsNull",
            "ConditionSymbol":"{-}",
            "OperandCount": "0"
        },
        {
            "ConditionId": "10",
            "ConditionName": "IsNotNull",
            "ConditionSymbol":"!{-}",
            "OperandCount": "0"
        },
        {
            "ConditionId": "11",
            "ConditionName": "Between",
            "ConditionSymbol":"{..} & {..}",
            "OperandCount": "2"
        },
        {
            "ConditionId": "12",
            "ConditionName": "NotBetween",
            "ConditionSymbol":"!({..} & {..})",
            "OperandCount": "2"
        },
        {
            "ConditionId": "13",
            "ConditionName": "In",
            "ConditionSymbol":"({..})",
            "OperandCount": "NULL"
        },
        {
            "ConditionId": "14",
            "ConditionName": "NotIn",
            "ConditionSymbol":"!({..})",
            "OperandCount": "NULL"
        },
        {
            "ConditionId": "15",
            "ConditionName": "IsEmpty",
            "ConditionSymbol":"{}",
            "OperandCount": "0"
        },
        {
            "ConditionId": "16",
            "ConditionName": "IsNotEmpty",
            "ConditionSymbol":"!{-}",
            "OperandCount": "0"
        },
        {
            "ConditionId": "17",
            "ConditionName": "IsTrue",
            "ConditionSymbol":"T",
            "OperandCount": "0"
        },
        {
            "ConditionId": "18",
            "ConditionName": "IsFalse",
            "ConditionSymbol":"F",
            "OperandCount": "0"
        },
        {
            "ConditionId": "19",
            "ConditionName": "IsBlank",
            "ConditionSymbol":"{  }",
            "OperandCount": "0"
        },
        {
            "ConditionId": "20",
            "ConditionName": "IsNotBlank",
            "ConditionSymbol": "!{  }"
        },
        {
            "ConditionId": "21",
            "ConditionName": "Contains",
            "ConditionSymbol":"%{..}%",
            "OperandCount": "1"
        },
        {
            "ConditionId": "22",
            "ConditionName": "NotContains",
            "ConditionSymbol":"!(%{..}%)",
            "OperandCount": "1"
        },
        {
            "ConditionId": "23",
            "ConditionName": "LastXDays",
            "ConditionSymbol":"L:X:D",
            "OperandCount": "1"
        },
        {
            "ConditionId": "24",
            "ConditionName": "BeforeXDay",
            "ConditionSymbol":"B:X:D",
            "OperandCount": "1"
        },
        {
            "ConditionId": "25",
            "ConditionName": "OnOrBefore",
            "ConditionSymbol":"",
            "OperandCount": "1"
        }
        ,
        {
            "ConditionId": "26",
            "ConditionName": "OnOrAfter",
            "ConditionSymbol":"",
            "OperandCount": "1"
        }
    ]

    ,

    "conditiondatatyperelations" : [

        {
            "RelationId":1,
            "DataTypeId":1,
            "ConditionId":1,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":2,
            "DataTypeId":1,
            "ConditionId":2,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":3,
            "DataTypeId":1,
            "ConditionId":3,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":4,
            "DataTypeId":1,
            "ConditionId":4,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":5,
            "DataTypeId":1,
            "ConditionId":5,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":6,
            "DataTypeId":1,
            "ConditionId":6,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":7,
            "DataTypeId":1,
            "ConditionId":7,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":8,
            "DataTypeId":1,
            "ConditionId":8,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":9,
            "DataTypeId":1,
            "ConditionId":9
        },
        {
            "RelationId":10,
            "DataTypeId":1,
            "ConditionId":10
            
        },
        {
            "RelationId":11,
            "DataTypeId":1,
            "ConditionId":11,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":12,
            "DataTypeId":1,
            "ConditionId":12,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":13,
            "DataTypeId":1,
            "ConditionId":13,
            "OperandDataTypeId":1,
            "InputType":"multi-select dropdown"
        },
        {
            "RelationId":14,
            "DataTypeId":1,
            "ConditionId":14,
            "OperandDataTypeId":1,
            "InputType":"multi-select dropdown"
        },
        {
            "RelationId":15,
            "DataTypeId":1,
            "ConditionId":15
            
        },
        {
            "RelationId":16,
            "DataTypeId":1,
            "ConditionId":16
            
        },
        {
            "RelationId":17,
            "DataTypeId":5,
            "ConditionId":15
            
        },
        {
            "RelationId":18,
            "DataTypeId":5,
            "ConditionId":16
            
        },
        {
            "RelationId":19,
            "DataTypeId":1,
            "ConditionId":19
            
        },
        {
            "RelationId":20,
            "DataTypeId":1,
            "ConditionId":20
            
        },
        {
            "RelationId":21,
            "DataTypeId":1,
            "ConditionId":21,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        {
            "RelationId":22,
            "DataTypeId":1,
            "ConditionId":22,
            "OperandDataTypeId":1,
            "InputType":"number input"
        },
        
        {
            "RelationId":23,
            "DataTypeId":2,
            "ConditionId":1,
            "OperandDataTypeId":1,
            "InputType":"decimal input"
        },
        {
            "RelationId":24,
            "DataTypeId":2,
            "ConditionId":2,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":25,
            "DataTypeId":2,
            "ConditionId":3,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":26,
            "DataTypeId":2,
            "ConditionId":4,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":27,
            "DataTypeId":2,
            "ConditionId":5,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":28,
            "DataTypeId":2,
            "ConditionId":6,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":29,
            "DataTypeId":2,
            "ConditionId":7,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":30,
            "DataTypeId":2,
            "ConditionId":8,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":31,
            "DataTypeId":2,
            "ConditionId":9
        },
        {
            "RelationId":32,
            "DataTypeId":2,
            "ConditionId":10
            
        },
        {
            "RelationId":33,
            "DataTypeId":2,
            "ConditionId":11,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":34,
            "DataTypeId":2,
            "ConditionId":12,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":35,
            "DataTypeId":2,
            "ConditionId":13,
            "OperandDataTypeId":2,
            "InputType":"multi-select dropdown"
        },
        {
            "RelationId":36,
            "DataTypeId":2,
            "ConditionId":14,
            "OperandDataTypeId":2,
            "InputType":"multi-select dropdown"
        },
        {
            "RelationId":37,
            "DataTypeId":2,
            "ConditionId":15
            
        },
        {
            "RelationId":38,
            "DataTypeId":2,
            "ConditionId":16
            
        },
        {
            "RelationId":39,
            "DataTypeId":5,
            "ConditionId":17
            
        },
        {
            "RelationId":40,
            "DataTypeId":5,
            "ConditionId":18
            
        },
        {
            "RelationId":41,
            "DataTypeId":2,
            "ConditionId":19
            
        },
        {
            "RelationId":42,
            "DataTypeId":2,
            "ConditionId":20
            
        },
        {
            "RelationId":43,
            "DataTypeId":2,
            "ConditionId":21,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":44,
            "DataTypeId":2,
            "ConditionId":22,
            "OperandDataTypeId":2,
            "InputType":"decimal input"
        },
        {
            "RelationId":45,
            "DataTypeId":3,
            "ConditionId":1,
            "OperandDataTypeId":3,
            "InputType":"text input"
        },
        {
            "RelationId":46,
            "DataTypeId":3,
            "ConditionId":2,
            "OperandDataTypeId":3,
            "InputType":"text input"
        },
        {
            "RelationId":47,
            "DataTypeId":3,
            "ConditionId":7,
            "OperandDataTypeId":3,
            "InputType":"text input"
        },
        {
            "RelationId":48,
            "DataTypeId":3,
            "ConditionId":8,
            "OperandDataTypeId":3,
            "InputType":"text input"
        },
        {
            "RelationId":49,
            "DataTypeId":3,
            "ConditionId":9
        },
        {
            "RelationId":50,
            "DataTypeId":3,
            "ConditionId":10
        },
        {
            "RelationId":51,
            "DataTypeId":3,
            "ConditionId":15
        },
        {
            "RelationId":52,
            "DataTypeId":3,
            "ConditionId":16
        },
        {
            "RelationId":53,
            "DataTypeId":5,
            "ConditionId":19
        },
        {
            "RelationId":54,
            "DataTypeId":5,
            "ConditionId":20
        },
        {
            "RelationId":55,
            "DataTypeId":3,
            "ConditionId":19
        },
        {
            "RelationId":56,
            "DataTypeId":3,
            "ConditionId":20
        },
        {
            "RelationId":57,
            "DataTypeId":3,
            "ConditionId":21,
            "OperandDataTypeId":3,
            "InputType":"text input"
        },
        {
            "RelationId":58,
            "DataTypeId":3,
            "ConditionId":22,
            "OperandDataTypeId":3,
            "InputType":"text input"
        },
        {
            "RelationId":59,
            "DataTypeId":4,
            "ConditionId":23,
            "OperandDataTypeId":3,
            "InputType":"number input"
        },
        {
            "RelationId":60,
            "DataTypeId":4,
            "ConditionId":24,
            "OperandDataTypeId":3,
            "InputType":"number input"
        },
        {
            "RelationId":61,
            "DataTypeId":4,
            "ConditionId":25,
            "OperandDataTypeId":4,
            "InputType":"date input"
        },
        {
            "RelationId":62,
            "DataTypeId":4,
            "ConditionId":26,
            "OperandDataTypeId":4,
            "InputType":"date input"
        },
        {
            "RelationId":63,
            "DataTypeId":4,
            "ConditionId":1,
            "OperandDataTypeId":4,
            "InputType":"date input"
        },
        {
            "RelationId":64,
            "DataTypeId":4,
            "ConditionId":2,
            "OperandDataTypeId":4,
            "InputType":"date input"
        },
        {
            "RelationId":65,
            "DataTypeId":4,
            "ConditionId":9
        },
        {
            "RelationId":66,
            "DataTypeId":4,
            "ConditionId":10
        },
        {
            "RelationId":67,
            "DataTypeId":4,
            "ConditionId":11,
            "OperandDataTypeId":4,
            "InputType":"date input"
        },
        {
            "RelationId":68,
            "DataTypeId":4,
            "ConditionId":12,
            "OperandDataTypeId":4,
            "InputType":"date input"
        },
        {
            "RelationId":69,
            "DataTypeId":4,
            "ConditionId":15
        },
        {
            "RelationId":70,
            "DataTypeId":4,
            "ConditionId":16
        }
    ]

}

export { db }