import pytest
from models.orders import OrderIn, OrdersIn, OrderOut
from models.accounts import AccountIn, AccountOutWithHashedPassword
from authenticator import authenticator

"""
This is where we create our fixtures for use in the actual tests.

For more info on testing refer to the reference in .scratch-paper!
"""


@pytest.fixture(scope="class")
def auth_obj():
    return authenticator


@pytest.fixture(scope="class")
def dummy_user() -> AccountOutWithHashedPassword:
    info = AccountIn(
        username="steveMartin",
        password="123thankyou",
        email="steve@aol.com",
        first_name="Steve",
        last_name="Martin",
        phone_number="555-555-5555",
        role="customer",
    )
    hashed_password = authenticator.hash_password(info.password)
    account = info.dict()
    account["hashed_password"] = hashed_password
    account["id"] = "123id"
    del account["password"]
    return AccountOutWithHashedPassword(**account)


@pytest.fixture(scope="class")
def dummy_order(dummy_user) -> OrderOut:
    order = OrderIn(
        surfboard_shaper="Rusty",
        surfboard_model="Twin fin",
        surfboard_length=6,
        surfboard_width=19,
        surfboard_thickness=2.75,
        surfboard_construction="PU",
        surfboard_fin_system="FCS2",
        surfboard_fin_count=2,
        surfboard_tail_style="swallow",
        surfboard_glassing="6 + 4 x 6",
        surfboard_desc="",
    )
    data = order.dict()
    data["order_status"] = "Order received"
    data["reviewed"] = False
    data["customer_username"] = dummy_user.username
    data["order_id"] = "dummy_id"
    data["date"] = "2024-01-15, 22:14"
    return OrderOut(**data)


@pytest.fixture(scope="class")
def dummy_order_2() -> OrdersIn:
    order = OrderIn(
        surfboard_shaper="Channel Islands",
        surfboard_model="Al Merrick",
        surfboard_length=5.8,
        surfboard_width=18.75,
        surfboard_thickness=2.5,
        surfboard_construction="EPS",
        surfboard_fin_system="Future",
        surfboard_fin_count=3,
        surfboard_tail_style="squash",
        surfboard_glassing="4 x 4",
        surfboard_desc="A fast and responsive board",
    )
    return OrdersIn(orders=[order])
