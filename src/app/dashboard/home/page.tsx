import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const links = [
    { name: "accordion",        description: "A vertically stacked set of interactive headings that each reveal a section of content.",                                 img:"", href: "accordion"      },
    { name: "alert",            description: "Displays a callout for user attention.",                                                                                  img:"", href: "alert"          },
    { name: "alert dialog",     description: "A modal dialog that interrupts the user with important content and expects a response.",                                  img:"", href: "alert-dialog"   },
    { name: "avatar",           description: "An image element with a fallback for representing the user.",                                                             img:"https://github.com/shadcn.png", href: "avatar"},
    { name: "button",           description: "Displays a button or a component that looks like a button.",                                                              img:"", href: "button"         },
    { name: "badge",            description: "Displays a badge or a component that looks like a badge.",                                                                img:"", href: "badge"          },
    { name: "calendar",         description: "A date field component that allows users to enter and edit date.",                                                        img:"", href: "calendar"       },
    { name: "card",             description: "Displays a card with header, content, and footer.",                                                                       img:"", href: "card"           },
    { name: "carousel",         description: "A carousel with motion and swipe built using Embla.",                                                                     img:"", href: "carousel"       },
    { name: "carousel autoplay",description: "A carousel with motion and swipe built using Embla.",                                                                     img:"", href: "carousel-autoplay" },
    { name: "checkbox",         description: "A control that allows the user to toggle between checked and not checked.",                                               img:"", href: "checkbox"       },
    { name: "combobox",         description: "Autocomplete input and command palette with a list of suggestions.",                                                      img:"", href: "combobox"       },
    { name: "command",          description: "Fast, composable, unstyled command menu for React.",                                                                      img:"", href: "command"        },
    { name: "context menu",     description: "Displays a menu to the user — such as a set of actions or functions — triggered by a button.",                            img:"", href: "context-menu"   },
    { name: "dialog",           description: "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",        img:"", href: "dialog"         },
    { name: "menu bar",         description: "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",   img:"", href: "menu-bar"       },
    { name: "input OTP",        description: "Accessible one-time password component with copy paste functionality.",                                                   img:"", href: "input-otp"      },
    { name: "progress",         description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",                 img:"", href: "progress"       },
    { name: "sheet",            description: "Extends the Dialog component to display content that complements the main content of the screen.",                        img:"", href: "sheet"          },
    { name: "skeleton",         description: "Use to show a placeholder while content is loading.",                                                                     img:"", href: "skeleton"       },
    { name: "slider",           description: "An input where the user selects a value from within a given range.",                                                      img:"", href: "slider"         },
    { name: "sonner",           description: "An opinionated toast component for React.",                                                                               img:"", href: "sonner"         },
    { name: "toast",            description: "A succinct message that is displayed temporarily.",                                                                       img:"", href: "toast"          },   
    { name: "tabs",             description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",                              img:"", href: "tabs"           },
  ];

export default function Page(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {links.map((link) => (
            <Card>
                <CardHeader>
                    <CardTitle>{link.name}</CardTitle>
                    <CardDescription><img src={link.img} alt="No img"/></CardDescription>
                </CardHeader>
                <CardContent>
                    <p>{link.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <a href={link.href}>VER</a>
                </CardFooter>
            </Card>

        ))}
        </div>
    )
}