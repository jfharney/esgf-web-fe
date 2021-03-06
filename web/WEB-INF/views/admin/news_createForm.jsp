<%@ include file="/WEB-INF/views/common/include.jsp" %>

       <form:form modelAttribute="news" action="news/save" method="post" enctype="multipart/form-data">
            <fieldset>
                <legend>Article Fields</legend>
                <p>
                    <form:label for="title" path="title" cssErrorClass="error">Title</form:label><br/>
                    <form:input path="title" size="75" /> <form:errors path="title" />
                </p>
                <p>
                    <form:label for="imageFile" path="imageFile">Image to used inline: (<100K)</form:label><br/>
                    <input name="file" type="file"/>
                </p>

                <p>
                    <form:label for="body" path="body" cssErrorClass="error"> Contents (500 limit) </form:label><br/>
                    <form:textarea path="body" rows="10" cols="50" />"
                </p>
               <p>
                    <input type="submit" />
                </p>
            </fieldset>
        </form:form>

