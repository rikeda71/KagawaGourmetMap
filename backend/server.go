package main

import (
	"net/http"
	"github.com/labstack/echo"
	"github.com/s14t284/KagawaGourmetMap/backend/handler"
)

func main() {
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.GET("/shop",handler.GetShops())
	e.GET("/shop/:id",handler.GetShop())
	e.GET("/test/:id",handler.Gettest())

	e.Logger.Fatal(e.Start(":3922"))
}
