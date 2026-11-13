import asyncio
from urllib.parse import urlencode

from aiogram import Bot, Dispatcher, F
from aiogram.filters import Command
from aiogram.types import (
    CallbackQuery,
    InlineKeyboardMarkup,
    InlineKeyboardButton,
    KeyboardButton,
    Message,
    ReplyKeyboardMarkup,
    WebAppInfo,
)

TOKEN = "9049871807:AAGbihHAxHINGThDGShi2mh8jkkUvKQQjOI"
if TOKEN == "PASTE_YOUR_BOT_TOKEN_HERE":
    raise RuntimeError("Paste your Telegram bot token into the TOKEN variable.")

NGROK_URL = "https://photo-magical-unnamed.ngrok-free.dev"

bot = Bot(token=TOKEN)
dp = Dispatcher()

diagnoses = {
    "sounds": ("🗣️", "Произношение и речь"),
    "delay": ("🌱", "Задержка речи (ЗПРР)"),
    "autism": ("♾️", "Аутизм (РАС)"),
    "stutter": ("💬", "Заикание"),
    "adhd": ("⚡", "СДВГ и внимание"),
    "aphasia": ("🧠", "Восстановление речи"),
    "aac": ("🧩", "Альтернативная коммуникация"),
}

ages = {
    "child": ("👶", "Ребёнку"),
    "teen": ("🧑‍🎓", "Подростку"),
    "adult": ("🧑", "Взрослому"),
}

formats = {
    "offline": ("🏥", "Очно"),
    "online": ("💻", "Онлайн"),
}


def diagnosis_keyboard() -> InlineKeyboardMarkup:
    buttons = [
        InlineKeyboardButton(
            text=f"{icon} {label} {icon}",
            callback_data=f"diagnosis:{key}"
        )
        for key, (icon, label) in diagnoses.items()
    ]
    return InlineKeyboardMarkup(inline_keyboard=[[button] for button in buttons])


def age_keyboard(need: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[
        InlineKeyboardButton(
            text=f"{icon} {label} {icon}",
            callback_data=f"age:{need}:{key}"
        )
        for key, (icon, label) in ages.items()
    ]])


def format_keyboard(need: str, age: str) -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(inline_keyboard=[[
        InlineKeyboardButton(
            text=f"{icon} {label} {icon}",
            web_app=WebAppInfo(
                url=f"{NGROK_URL}/?{urlencode({'need': need, 'age': age, 'format': key})}#catalog"
            )
        )
        for key, (icon, label) in formats.items()
    ]])


# Нижняя клавиатура с общим входом в каталог.
main_reply_kb = ReplyKeyboardMarkup(
    keyboard=[
        [
            KeyboardButton(
                text="🚀 Открыть каталог",
                web_app=WebAppInfo(url=f"{NGROK_URL}/#catalog")
            ),
            KeyboardButton(text="🔄 Перезапуск бота")
        ]
    ],
    resize_keyboard=True
)


@dp.message(Command("start"))
async def cmd_start(message: Message):
    await message.answer(
        "Здравствуйте! 👋\n\n"
        "Добро пожаловать на платформу поддержки семей. "
        "Шаг 1 из 3. Выберите диагноз или направление:",
        reply_markup=diagnosis_keyboard()
    )

    await message.answer(
        "👇 Также вы можете управлять приложением с помощью кнопок внизу:",
        reply_markup=main_reply_kb
    )


@dp.callback_query(F.data.startswith("diagnosis:"))
async def choose_diagnosis(callback: CallbackQuery):
    if not isinstance(callback.message, Message):
        await callback.answer("Сообщение недоступно.", show_alert=True)
        return

    need = (callback.data or "").partition(":")[2]
    if need not in diagnoses:
        await callback.answer("Не удалось распознать направление.", show_alert=True)
        return

    await callback.message.edit_text(
        f"Выбрано направление: {diagnoses[need][1]}.\n"
        "Шаг 2 из 3. Для кого нужна помощь?",
        reply_markup=age_keyboard(need)
    )
    await callback.answer()


@dp.callback_query(F.data.startswith("age:"))
async def choose_age(callback: CallbackQuery):
    if not isinstance(callback.message, Message):
        await callback.answer("Сообщение недоступно.", show_alert=True)
        return

    parts = (callback.data or "").split(":")
    if len(parts) != 3:
        await callback.answer("Не удалось распознать выбор.", show_alert=True)
        return
    _, need, age = parts
    if need not in diagnoses or age not in ages:
        await callback.answer("Не удалось распознать выбор.", show_alert=True)
        return

    await callback.message.edit_text(
        f"Направление: {diagnoses[need][1]}.\n"
        f"Возраст: {ages[age][1].lower()}.\n"
        "Шаг 3 из 3. Выберите формат занятий:",
        reply_markup=format_keyboard(need, age)
    )
    await callback.answer()


@dp.message(F.text == "🔄 Перезапуск бота")
async def restart_bot(message: Message):
    await cmd_start(message)


@dp.message()
async def block_text(message: Message):
    await message.answer(
        "Пожалуйста, используйте кнопки меню или клавиатуру ниже 👇",
        reply_markup=main_reply_kb
    )

async def main():
    print("Бот с гибридным интерфейсом запущен!")
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())