from flet import *
from utils.extras import *

class App(UserControl):
    def main(pg:Page):
        pg.bgcolor = 'white'
        pg.window_bgcolor= 'white'
        pg.window_width = base_width
        pg.horizontal_alignment = "center"
        pg. vertical_alignment = "center"
        pg.window_height = base_height
        pg.title = "MainPage"

        #add page elements

        pg.add(
            Row(
                [
                    TextField(width=180,
                              hint_text="Username",
                              color=colors.BLACK,
                              focused_border_color="blue",
                              border_color=colors.GREY_600,),

                    FilledTonalButton(text="Submit",
                                      height=45,
                                      style=ButtonStyle(
                                         bgcolor=colors.BLACK,
                                      ),
                                      adaptive=True,
                                      icon=icons.DRAFTS_SHARP
                                      )
                ],
                alignment=MainAxisAlignment.CENTER

            )
        )

    app(target=main)