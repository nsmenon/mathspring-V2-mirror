<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<form method="post" name="login" action="${pageContext.request.contextPath}/WoLoginServlet">
    <input type="hidden" name="var" value="b"/>
    <input type="hidden" name="action" value="LoginInterventionInput"/>
    <input type="hidden" name="sessionId" value="${sessionId}">
    <input type="hidden" name="skin" value="${skin}"/>
    <input type="hidden" name="interventionClass" value="${interventionClass}"/>

    <p>&nbsp;</p>

    <p><b>How confident do you feel when solving math problems?:</b></p>
    <label class="radio-inline">
        <input type="radio" name="confidence" value="1">Not at all
    </label>
    <label class="radio-inline">
        <input type="radio" name="confidence" value="2">A little
    </label>
    <label class="radio-inline">
        <input type="radio" name="confidence" value="3">Somewhat
    </label>
    <label class="radio-inline">
        <input type="radio" name="confidence" value="4">Quite a bit
    </label>
    <label class="radio-inline">
        <input type="radio" name="confidence" value="5">Extremely
    </label>
    <br>

    <br>
    <p><b>How interested do you feel when solving math problems, in general?:</b></p>
    <label class="radio-inline">
        <input type="radio" name="interest" value="1">Not at all
    </label>
    <label class="radio-inline">
        <input type="radio" name="interest" value="2">A little
    </label>
    <label class="radio-inline">
        <input type="radio" name="interest" value="3">Somewhat
    </label>
    <label class="radio-inline">
        <input type="radio" name="interest" value="4">Quite a bit
    </label>
    <label class="radio-inline">
        <input type="radio" name="interest" value="5">Extremely
    </label>
    </br>
    <br>

    <p><b>In general, how exciting is it to solve math problems?:</b></p>
    <label class="radio-inline">
        <input type="radio" name="excitement" value="1">Not at all
    </label>
    <label class="radio-inline">
        <input type="radio" name="excitement" value="2">A little
    </label>
    <label class="radio-inline">
        <input type="radio" name="excitement" value="3">Somewhat
    </label>
    <label class="radio-inline">
        <input type="radio" name="excitement" value="4">Quite a bit
    </label>
    <label class="radio-inline">
        <input type="radio" name="excitement" value="5">Extremely
    </label>
    </br>


    <br>
    <p><b>How frustrated do you feel when solving math problems overall?:</b></p>
    <label class="radio-inline">
        <input type="radio" name="frustration" value="1">Not at all
    </label>
    <label class="radio-inline">
        <input type="radio" name="frustration" value="2">A little
    </label>
    <label class="radio-inline">
        <input type="radio" name="frustration" value="3">Somewhat
    </label>
    <label class="radio-inline">
        <input type="radio" name="frustration" value="4">Quite a bit
    </label>
    <label class="radio-inline">
        <input type="radio" name="frustration" value="5">Extremely
    </label>
    </br>

    <input class="btn mathspring-btn" type="submit"  value="Submit" />
    </p>
</form>
