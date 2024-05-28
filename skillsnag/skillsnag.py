import reflex as rx

def content():
    return rx.box(

        rx.heading("Welcome to My App"),
        rx.text("This is the main content of the page. "),
    )

def navbar():
    return rx.hstack(
        rx.hstack(
            rx.image(src="/favicon.ico", width="2em"),
            rx.heading("My App", font_size="2em"),
        ),
        rx.spacer(),
        rx.menu.root(
            rx.menu.trigger(
            rx.button("Menu"),
        ),
        rx.menu.content(
            rx.menu.item("item 1"),
            rx.menu.separator(),
            rx.menu.item("item 2"),
            rx.menu.item("item 3"),
            width="10rem"
        ),
    ),
    position="fixed",
    top="0px",
    background_color="lightgray",
    padding="1em",
    height="4em",
    width="100%",
    z_index=5,
    )

def index():
        return rx.fragment(
            navbar(),
            rx.container(
                content(),
                padding_top="6em",
                max_width="60em",
            ),
        )

app = rx.App()
app.add_page(index)