import flet as ft
from flet import(
    Column,
    Container,
    ElevatedButton,
    Page,
    Row,
    Text,
    UserControl,
    border_radius,
    colors,
    Icon,
    AppBar,
    PopupMenuButton,
    PopupMenuItem,
    icons,
    margin
)

# class CalculatorApp(UserControl):
#     def build(self):
#         self.reset()
#         self.result = Text(value="0", color=colors.WHITE, size=20)

#         # applications root control (i.e. "view") containing all other controls
#         return Container(
#             width=300,
#             bgcolor=colors.BLACK,
#             border_radius=border_radius.all(20),
#             padding=20,
#             content=Column(
#                 controls=[
#                     Row(controls=[self.result], alignment="end"),
#                     Row(
#                         controls=[
#                             ElevatedButton(
#                                 text="AC",
#                                 bgcolor=colors.BLUE_GREY_100,
#                                 color=colors.BLACK,
#                                 expand=1.5,
#                                 on_click=self.button_clicked,
#                                 data="AC",
#                             ),
#                             ElevatedButton(
#                                 text="+/-",
#                                 bgcolor=colors.BLUE_GREY_100,
#                                 color=colors.BLACK,
#                                 expand=1.5,
#                                 on_click=self.button_clicked,
#                                 data="+/-",
#                             ),
#                             ElevatedButton(
#                                 text="%",
#                                 bgcolor=colors.BLUE_GREY_100,
#                                 color=colors.BLACK,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="%",
#                             ),
#                             ElevatedButton(
#                                 text="/",
#                                 bgcolor=colors.ORANGE,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="/",
#                             ),
#                         ]
#                     ),
#                     Row(
#                         controls=[
#                             ElevatedButton(
#                                 text="7",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="7",
#                             ),
#                             ElevatedButton(
#                                 text="8",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="8",
#                             ),
#                             ElevatedButton(
#                                 text="9",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="9",
#                             ),
#                             ElevatedButton(
#                                 text="*",
#                                 bgcolor=colors.ORANGE,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="*",
#                             ),
#                         ]
#                     ),
#                     Row(
#                         controls=[
#                             ElevatedButton(
#                                 text="4",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="4",
#                             ),
#                             ElevatedButton(
#                                 text="5",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="5",
#                             ),
#                             ElevatedButton(
#                                 text="6",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="6",
#                             ),
#                             ElevatedButton(
#                                 text="-",
#                                 bgcolor=colors.ORANGE,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="-",
#                             ),
#                         ]
#                     ),
#                     Row(
#                         controls=[
#                             ElevatedButton(
#                                 text="1",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="1",
#                             ),
#                             ElevatedButton(
#                                 text="2",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="2",
#                             ),
#                             ElevatedButton(
#                                 text="3",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="3",
#                             ),
#                             ElevatedButton(
#                                 text="+",
#                                 bgcolor=colors.ORANGE,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="+",
#                             ),
#                         ]
#                     ),
#                     Row(
#                         controls=[
#                             ElevatedButton(
#                                 text="0",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="0",
#                             ),
#                             ElevatedButton(
#                                 text=".",
#                                 bgcolor=colors.WHITE24,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data=".",
#                             ),
#                             ElevatedButton(
#                                 text="=",
#                                 bgcolor=colors.ORANGE,
#                                 color=colors.WHITE,
#                                 expand=1,
#                                 on_click=self.button_clicked,
#                                 data="=",
#                             ),
#                         ]
#                     ),
#                 ]
#             ),
#         )
    
#     #button click and display functions
#     def button_clicked(self, e):
#         data = e.control.data
#         if self.result.value == "Error" or data == "AC": # resets or clear value, if existing value is 0 or "AC"
#             self.result.value = "0"
#             self.reset()

#         elif data in ("1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."):
#             if self.result.value == "0" or self.new_operand == True:
#                 self.result.value = data
#                 self.new_operand = False
#             else:
#                 self.result.value = self.result.value + data # displays any of the number as new_operand if the existing is "0", if its not "0" it concatenates the numbers
        
#         elif data in ("+", "-", "*", "/"):
#             self.result.value = self.calculate(
#                 self.operand1, float(self.result.value), self.operator
#             )
#             self.operator = data
#             if self.result.value == "Error":
#                 self.operand1 = "0"
#             else:
#                 self.operand1 = float(self.result.value)
#             self.new_operand = True
        
#         elif data in ("="):
#             self.result.value = self.calculate(
#                 self.operand1, float(self.result.value), self.operator
#             )
#             self.reset()

#         elif data in ("%"):
#             self.result.value = float(self.result.value) / 100
#             self.reset()

#         elif data in ("+/-"):
#             if float(self.result.value) > 0:
#                 self.result.value = "-" + str(self.result.value)

#             elif float(self.result.value) < 0:
#                 self.result.value = str(
#                     self.format_number(abs(float(self.result.value)))
#                 )
#         self.update()

#     # define number
#     def format_number(self, num):
#         if num % 1 == 0:
#             return int(num)
#         else:
#             return num
        
#     # calculate function
#     def calculate(self, operand1, operand2, operator):

#         if operator == "+":
#             return self.format_number(operand1 + operand2)
        
#         elif operator == "-":
#             return self.format_number(operand1 - operand2)
        
#         elif operator == "*":
#             return self.format_number(operand1 * operand2)
        
#         elif operator == "/":
#             if operand2 == 0:
#                 return "Error"
#             else:
#                 return self.format_value(operand1 / operand2)
#     def reset(self):
#         self.operator = "+"
#         self.operand1 = 0
#         self.new_operand = True

class CalculatorApp:
    def __init__(self, page: Page):
        self.page = page
        self.appbar_items = [
            PopupMenuItem(text="About"),
            PopupMenuItem(),
            PopupMenuItem(text="Settings")
        ]
        self.appbar = AppBar(
            leading=Icon(icons.CALCULATE),
            leading_width=50,
            title=Text("Calculator", size=20, text_align="start"),
            toolbar_height=75,
            bgcolor=colors.LIGHT_BLUE_ACCENT_700,
            actions=[
                Container(
                    content=PopupMenuButton(
                        items=self.appbar_items
                    ),
                    margin=margin.only(left=50, right=25)
                )
            ],
        )
        self.page.appbar = self.appbar
        self.page.update()

if __name__ == "__main__":

    def main(page: Page):
        page.title= "Calculator App"
        page.padding = 10
        page.bgcolor = colors.BLUE_GREY_200
        app = CalculatorApp(page)
        page.add(app)
        page.update()
        
    ft.app(target=main)